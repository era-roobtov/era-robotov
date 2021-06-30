import PropTypes from "prop-types";
import Item from "./Item/Item";
import styles from "./TextList.module.scss";

const TextList = ({title, list}) => {
  return (
    <div className={styles.list}>
      <div className={styles.list__robots}/>
      <h2 className={styles.list__header}>{title}</h2>
      <ul className={styles.list__items}>
        {list.map((item) => <Item text={item}/>)}
      </ul>
    </div>
  )
};

TextList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
}

export default TextList;
