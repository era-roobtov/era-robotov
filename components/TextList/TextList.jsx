import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import {
  BLUE,
  CLIP_BLUE,
  CLIP_BLUE_REVERSE,
  CLIP_ORANGE,
} from '@/utils/globalStyles';
import styles from './TextList.module.scss';

const TextList = ({title, list, clip, shiftCount}) => {
  const [shiftClass, setShiftClass] = useState(null)

  useEffect(() => {
    switch (shiftCount) {
      case 1:
        setShiftClass(styles.list_single);
        break;
      case 2:
        setShiftClass(styles.list_double);
        break;
      default:
        break;
    }
  }, [clip]);

  return (
      <section className={`${styles.list} ${shiftClass} ${clip}`}>
        <div className={styles.list__robots}/>
        <h2 className={styles.list__header}>{title}</h2>
        <ul className={`${styles.list__items}`}>
          {list.map((item) => <Item key={item} text={item}/>)}
        </ul>

      </section>
  );
};

TextList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  clip: PropTypes.oneOf[CLIP_BLUE, CLIP_ORANGE, CLIP_BLUE, CLIP_BLUE_REVERSE],
  shiftCount: PropTypes.any,
};

export default TextList;
