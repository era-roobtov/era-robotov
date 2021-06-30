import PropTypes from "prop-types";
import styles from "./Item.module.scss";

const Item = ({ img, text }) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="_" />
      <p className={styles.item__text}>{text}</p>
    </div>
  );
};

Item.propTypes = {
  imgPath: PropTypes.string,
  text: PropTypes.string,
};

export default Item;
