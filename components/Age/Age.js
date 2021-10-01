import styles from './Age.module.scss';
import PropTypes from "prop-types";

const Age = ({text}) => {
    return (
        <div className={styles.age}>
            <p className={styles.age__text}>{text} лет</p>
        </div>
    )
};

Age.propTypes = {
    text: PropTypes.string.isRequired
}

export default Age;
