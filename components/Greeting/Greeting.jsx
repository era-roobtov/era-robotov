import PropTypes from 'prop-types';
import navPaths from '@/utils/paths';
import RainbowButton from '@/components/Buttons/RainbowButton';
import styles from './Greeting.module.scss';

const Greeting = ({btn, header, imgPath, subText, mobileImgTop}) => {
  let gridPos;
  if (mobileImgTop) {
    gridPos = styles.helloWithoutBtnImgTop;
  } else {
    gridPos = btn.show ? styles.helloWithBtn : styles.helloWithOutBtn;
  }

  return (
      <section className={gridPos}>
        <h1 className={styles.greeting__head}>
          {header}
        </h1>
        <p className={styles.sub__text}>
          {subText}
        </p>
        <div className={styles.sub__img}>
          <img src={imgPath} alt=""/>
        </div>
        {btn.show && <div className={styles.sub__btn}>
          <RainbowButton path={navPaths.courses} text={'Выбрать курс'}/>
        </div>}
      </section>
  );
};

Greeting.propTypes = {
  header: PropTypes.string,
  subText: PropTypes.string,
  imgPath: PropTypes.string,
  mobileImgTop: PropTypes.bool,
  btn: {
    show: PropTypes.bool,
    btnText: PropTypes.string | undefined,
  },
};

export default Greeting;
