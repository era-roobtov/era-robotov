import PropTypes from 'prop-types';
import styles from './Teachers.module.scss';
import Teacher from '@/components/Teachers/Teacher';

const Teachers = ({list, title, clip, shiftClass}) => {

  return (
      <section className={`${clip} ${shiftClass} ${styles.section}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.teachers}>
          {list.map((data) => <Teacher key={data.avatar} {...data}/>)}
        </div>
      </section>
  );
};

Teachers.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  clip: PropTypes.string,
  shiftClass: PropTypes.string
};

export default Teachers;
