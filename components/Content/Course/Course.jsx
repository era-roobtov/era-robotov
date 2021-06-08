import PropTypes from "prop-types";
import styles from './Course.module.scss';

const Course = ({ info }) => {
  const { title, description } = info;

  return (
    <div className={styles.course}>
      <h2 className={styles.course__title}>{title}</h2>
      <p className={styles.course__description}>{description}</p>
    </div>
  );
};

Course.propTypes = {
  info: PropTypes.object,
};

export default Course;
