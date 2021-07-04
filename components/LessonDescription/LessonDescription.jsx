import PropTypes from 'prop-types';
import styles from './LessonDescription.module.scss';

const LessonDescription = ({descriptionList, clip, id}) => {
  return (
    <section className={`${styles.lesson} ${clip}`}>
      <h2 className={styles.lesson__header}>Описание занятий</h2>
      <ul className={styles.lesson__list}>
        {descriptionList.map((description, index) => <li key={id + 'key' + index}>{description}</li>)}
      </ul>
    </section>
  );
};

LessonDescription.propTypes = {
  descriptionList: PropTypes.array,
  clip: PropTypes.string,
  id: PropTypes.string
};

export default LessonDescription;
