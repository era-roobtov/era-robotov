import PropTypes from 'prop-types';
import styles from './Course.module.scss';
import Logo from '@/components/Course/Logo';
import {ORANGE, BLUE} from '@/utils/globalStyles';
import OutlineButton from '@/components/Buttons/OutlineButton';
import navPaths from '@/utils/paths';
import {useContext} from "react";
import {ScrollContext} from "../../Context/ScrollContext";

const Course = ({index, id, title, logo, description, clip, asPath}) => {
  const {setScroll} = useContext(ScrollContext);
  const isOdd = index % 2 === 0;
  const anchor = '#' + title + id;
  const addClasses = isOdd ? clip + ' ' + styles.colored : styles.uncolored;

  const handleClick = (e) => {
    let cur = e.target;
    let res = null;
    let final = false;
    while(!final) {
      cur.classList.forEach((classItem) => {
        if (classItem.toLowerCase().includes('layout')) {
          final = true;
        }
      })

      if (!final) {
        res = cur;
        cur = cur.parentNode;
      }
    }
    console.log('COURSE')
    setScroll({
      isScroll: navPaths.courses,
      cords: res.offsetTop
    })
  }

  return (
      <section id={anchor}
               className={`${styles.course} ${addClasses}`}
      >
        <div className={styles.course__logo}><Logo logo={logo}/></div>
        <h2 className={`${styles.course__header} ${isOdd ?
            styles.white :
            styles.black}`}>{title}</h2>
        <p className={styles.course__description}>
          {description}
        </p>
        <div onClick={handleClick} className={styles.course__buttons}>
          <OutlineButton
              color={isOdd ? ORANGE : BLUE}
              path={navPaths.dynamicCourses}
              text={'Подробнее о курсе'}
              as={`/courses/${id}`}
          />
          {/*<ColorButton*/}
          {/*    color={isOdd ? ORANGE : BLUE}*/}
          {/*    path={anchor}*/}
          {/*    text={'Записаться на курс'}*/}
          {/*/>*/}
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
  asPath: PropTypes.string,
};

export default Course;
