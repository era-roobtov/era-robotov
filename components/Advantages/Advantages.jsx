import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ColorButton from '@/components/Buttons/ColorButton/ColorButton';
import navPaths from '@/utils/paths';
import {
  BLUE,
  CLIP_ORANGE,
  ORANGE,
} from '@/utils/colors';
import Item from '@/components/Advantages/Item';
import styles from './Advantages.module.scss';

const Advantages = ({title, list, clip, showBtn}) => {
  const [btnColor, setBtnColor] = useState(ORANGE);

  useEffect(() => {
    if (clip === CLIP_ORANGE) {
      setBtnColor(BLUE);
    }
  }, [clip]);

  return (
      <section className={`${styles.advantages} ${clip}`}>
        <h2 className={styles.advantages__header}>{title}</h2>
        <ul className={styles.advantages__list}>
          {list.map((item) => (
              <Item key={item.text} {...item} />
          ))}
        </ul>
        <div className={`${showBtn ? styles.advantages__btn_show : styles.advantages__btn_unshow }`}>
          <ColorButton
              path={navPaths.courses}
              text={'Выбрать курс'}
              color={btnColor}
          />
        </div>
      </section>
  );
};

Advantages.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  clip: PropTypes.string,
  showBtn: PropTypes.bool,
};

export default Advantages;
