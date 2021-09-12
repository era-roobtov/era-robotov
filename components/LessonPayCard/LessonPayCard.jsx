import PropTypes from 'prop-types';
import styles from './LessonPayCard.module.scss';
import Information from "@/components/LessonPayCard/Information";
import {ALIGN_SELF_END, ALIGN_SELF_START} from "@/utils/globalStyles";

const LessonPayCard = ({description, cost, requestFun}) => {

    return (
        <section className={styles.fullCard}>
            <div className={styles.info}>
                <h4 className={styles.info__header}>Стоимость курса</h4>
                <p className={styles.info__description}>{description}</p>
            </div>
            <div className={styles.payCard}>
                <Information
                    additionalInfo={'При покупке одного занятия'}
                    align={ALIGN_SELF_START}
                    cost={cost}
                    description={description}
                    requestFun={requestFun}
                />
                <Information
                    additionalInfo={'При покупке абонемента занитий'}
                    align={ALIGN_SELF_END}
                    cost={cost}
                    description={description}
                    requestFun={requestFun}
                />
            </div>
        </section>
    );
};

LessonPayCard.propTypes = {
    description: PropTypes.string,
    cost: PropTypes.number,
    requestFun: PropTypes.func
};

export default LessonPayCard;
