import PropTypes from "prop-types";
import styles from "./Item.module.scss";

const Item = ({ text }) => {
  return <li className={styles.item}>{text}</li>;
};

Item.propTypes = {
  text: PropTypes.string,
};

export default Item;
