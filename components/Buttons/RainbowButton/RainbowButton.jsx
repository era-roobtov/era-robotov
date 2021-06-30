import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./RainbowButton.module.scss";

const RainbowButton = ({ path, text }) => {
  return (
    <Link href={path}>
      <a className={styles.btn} >{text}</a>
    </Link>
  );
};

RainbowButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default RainbowButton;
