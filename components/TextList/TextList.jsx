import PropTypes from "prop-types";
import Item from "./Item/Item";
import styles from "./TextList.module.scss";

const TextList = ({title, list}) => {
  return (
    <section className={styles.list}>
      <div className={styles.list__robots}/>
      <h2 className={styles.list__header}>{title}</h2>
      <ul className={styles.list__items}>
        {list.map((item) => <Item key={item} text={item}/>)}
      </ul>
      
    </section>
  )
};

TextList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
}

export default TextList;
