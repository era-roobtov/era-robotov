import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./ColorButton.module.scss";

const ColorButton = ({ path, reverse, text }) => {
  return (
    <Link href={path}>
      <a
        className={`${styles.btn} ${
          reverse ? styles.btn__reverse : styles.btn__common
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

ColorButton.propTypes = {
  reverse: PropTypes.bool,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default ColorButton;
