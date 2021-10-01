import PropTypes from 'prop-types';
import Item from './Item/Item';
import {
  CLIP_BLUE,
  CLIP_BLUE_REVERSE,
  CLIP_ORANGE, SHIFT_DOUBLE, SHIFT_SINGLE,
} from '@/utils/globalStyles';
import styles from './TextList.module.scss';

const TextList = ({title, list, clip, shiftClass}) => {

  return (
      <section className={`${styles.list} ${shiftClass} ${clip}`}>
        <div className={styles.list__robots}/>
        <h2 className={styles.list__header}>{title}</h2>
        <ul className={`${styles.list__items}`}>
          {list.map((item) => <Item key={item.text} {...item}/>)}
        </ul>

      </section>
  );
};

TextList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  clip: PropTypes.oneOf[CLIP_BLUE, CLIP_ORANGE, CLIP_BLUE, CLIP_BLUE_REVERSE],
  shiftClass: PropTypes.oneOf[SHIFT_SINGLE, SHIFT_DOUBLE],
};

export default TextList;
