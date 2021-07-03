import PropTypes from 'prop-types';
import styles from './Course.module.scss';
import Logo from '@/components/Course/Logo';
import {ORANGE, BLUE} from '@/utils/colors';
import OutlineButton from '@/components/Buttons/OutlineButton';
import ColorButton from '@/components/Buttons/ColorButton';

const Course = ({index, id, title, logo, description, clip}) => {
  const isOdd = index % 2 === 0;
  const anchor = '#' + title + id;
  console.log(clip)
  return (
      <section id={anchor}
               className={`${styles.course} ${isOdd ? clip : ''}`}>
        <div className={styles.course__logo}><Logo logo={logo}/></div>
        <h2 className={`${styles.course__header} ${isOdd ?
            styles.white :
            styles.black}`}>{title}</h2>
        <p className={styles.course__description}>
          {description}
        </p>
        <div className={styles.course__buttons}>
          <OutlineButton
              color={isOdd ? ORANGE : BLUE}
              path={'#'}
              text={'Подробнее о курсе'}
          />
          <ColorButton
              color={isOdd ? ORANGE : BLUE}
              path={anchor}
              text={'Записаться на курс'}
          />
        </div>
      </section>
  );
};

Course.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  logo: PropTypes.array,
  description: PropTypes.string,
  index: PropTypes.number,
  clip: PropTypes.string,
};

export default Course;
