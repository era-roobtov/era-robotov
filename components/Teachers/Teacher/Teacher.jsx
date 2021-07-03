import PropTypes from 'prop-types';
import styles from './Teacher.module.scss';

const Teacher = ({avatar, text}) => {
  return (
      <div className={styles.teacher}>
        <img className={styles.teacher__avatar} src={avatar} alt=""/>
        <p className={styles.teacher__text}>{text}</p>
      </div>
  );
};

Teacher.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.string, // путь до аватарки
};

export default Teacher;

