import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ColorButton from '@/components/Buttons/ColorButton/ColorButton';
import navPaths from '@/utils/paths';
import {
  BLUE,
  CLIP_ORANGE,
  ORANGE, SHIFT_DOUBLE, SHIFT_SINGLE,
} from '@/utils/globalStyles';
import Item from '@/components/Advantages/Item';
import styles from './Advantages.module.scss';

const Advantages = ({
                      title,
                      list,
                      clip,
                      showBtn,
                      columnCount,
                      shiftClass,
                    }) => {
  const [btnColor, setBtnColor] = useState(ORANGE);
  const [listClass, setListClass] = useState(styles.advantages__list_single);

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
  shiftClass: PropTypes.oneOf[SHIFT_SINGLE, SHIFT_DOUBLE],
  boxesClass: PropTypes.string,
};

export default Advantages;
