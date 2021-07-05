import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ColorButton from '@/components/Buttons/ColorButton/ColorButton';
import navPaths from '@/utils/paths';
import {
  BLUE,
  CLIP_ORANGE,
  ORANGE,
} from '@/utils/globalStyles';
import Item from '@/components/Advantages/Item';
import styles from './Advantages.module.scss';

const Advantages = ({title, list, clip, showBtn, columnCount, shiftCount}) => {
  const [btnColor, setBtnColor] = useState(ORANGE);
  const [listClass, setListClass] = useState(styles.advantages__list_single);
  const [shiftClass, setShiftClass] = useState(null)

  useEffect(() => {
    if (clip === CLIP_ORANGE) {
      setBtnColor(BLUE);
    }

    switch (columnCount) {
      case 1:
        setListClass(styles.advantages__list_single);
        break;
      case 2:
        setListClass(styles.advantages__list_double);
        break;
      default:
        break;
    }

    switch (shiftCount) {
      case 1:
        setShiftClass(styles.advantages_single);
        break;
      case 2:
        setShiftClass(styles.advantages_double);
        break;
      default:
        setShiftClass(styles.advantages_zero);
        break;
    }
  }, [clip]);

  return (
      <section className={`${styles.advantages} ${shiftClass} ${clip}`}>
        <h2 className={styles.advantages__header}>{title}</h2>
        <ul className={`${styles.advantages__list} ${listClass}`}>
          {list.map((item) => (
              <Item key={item.text} {...item} />
          ))}
        </ul>
        <div className={`${showBtn ?
            styles.advantages__btn_show :
            styles.advantages__btn_unshow}`}>
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
  columnCount: PropTypes.oneOf[1, 2],
  shiftCount: PropTypes.any,
};

export default Advantages;
