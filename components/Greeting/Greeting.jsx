import PropTypes from 'prop-types';
import navPaths from '@/utils/paths';
import {bigLogo, lightLogo, darkLogo} from "@/utils/logoPaths";
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
        <div className={styles.sub__text}>
          {subText.map((str) => <p key={str}>{str}</p>)}
        </div>
        <div className={styles.sub__img}>
          <img src={darkLogo} alt="Эра Роботов"/>
        </div>
        {btn.show && <div className={styles.sub__btn}>
          <RainbowButton path={navPaths.courses} text={'Выбрать курс'}/>
        </div>}
      </section>
  );
};

Greeting.propTypes = {
  header: PropTypes.string,
  subText: PropTypes.array,
  imgPath: PropTypes.string,
  mobileImgTop: PropTypes.bool,
  btn: PropTypes.object,
};

export default Greeting;
