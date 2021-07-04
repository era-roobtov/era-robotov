import PropTypes from 'prop-types';
import styles from './LessonDescription.module.scss';

const LessonDescription = ({descriptionList, clip}) => {
  return (
    <section className={`${styles.lesson} ${clip}`}>
      <h2 className={styles.lesson__header}>Описание занятий</h2>
      <ul className={styles.lesson__list}>
        {descriptionList.map((description) => <li>{description}</li>)}
      </ul>
    </section>
  );
};

LessonDescription.propTypes = {
  descriptionList: PropTypes.array,
  clip: PropTypes.string
};

export default LessonDescription;
