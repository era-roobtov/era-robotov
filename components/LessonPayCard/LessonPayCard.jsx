import PropTypes from 'prop-types';
import styles from './LessonPayCard.module.scss';
import Information from "@/components/LessonPayCard/Information";
import {ALIGN_SELF_END, ALIGN_SELF_START} from "@/utils/globalStyles";

const LessonPayCard = ({description, cost, requestFun, hours}) => {

    return (
        <section className={styles.fullCard}>
            <div className={styles.info}>
                <h4 className={styles.info__header}>Стоимость курса*</h4>
                <p className={styles.info__description}>{description}</p>
            </div>
            <div className={styles.payCard}>
                <Information
                    hours={hours}
                    subscription={false}
                    additionalInfo={'При покупке разового занятия'}
                    align={ALIGN_SELF_START}
                    cost={cost[0]}
                    requestFun={requestFun}
                />
                <Information
                    subscription={true}
                    additionalInfo={'При покупке четырёх занятий скидка 10%'}
                    align={ALIGN_SELF_END}
                    cost={cost[1]}
                    requestFun={requestFun}
                />
            </div>
            <h5 className={styles.info__description}>* - Не является публичной офертой</h5>
        </section>
    );
};

LessonPayCard.propTypes = {
    description: PropTypes.string,
    cost: PropTypes.array,
    requestFun: PropTypes.func,
    hours: PropTypes.string
};

export default LessonPayCard;
