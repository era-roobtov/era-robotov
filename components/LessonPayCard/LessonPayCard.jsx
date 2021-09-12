import PropTypes from 'prop-types';
import styles from './LessonPayCard.module.scss';
import Information from "@/components/LessonPayCard/Information";

const LessonPayCard = ({description, cost, requestFun}) => {

    return (
        <section className={styles.payCard}>
            <Information cost={cost} description={description} requestFun={requestFun}/>
            <Information cost={cost} description={description} requestFun={requestFun}/>
        </section>
    );
};

LessonPayCard.propTypes = {
    description: PropTypes.string,
    cost: PropTypes.number,
    requestFun: PropTypes.func
};

export default LessonPayCard;
