import PropTypes from "prop-types";
import styles from "./Item.module.scss";

const Item = ({ imgPath, text }) => {
  return (
    <li className={styles.item}>
      <img className={styles.item__img} src={imgPath} alt="_" />
      <p className={styles.item__text}>{text}</p>
    </li>
  );
};

Item.propTypes = {
  imgPath: PropTypes.string,
  text: PropTypes.string,
};

export default Item;
