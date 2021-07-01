import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import {ORANGE, BLUE} from "@/utils/colors"
import styles from './OutlineButton.module.scss';

const OutlineButton = ({color, path, text}) => {
  const [btnColor, setBtnColor] = useState(styles.common);

  useEffect(() => {
    switch (color) {
      case ORANGE:
        setBtnColor(styles.orange)
        break;
      case BLUE:
        setBtnColor(styles.blue)
        break;
      default:
        break;
    }
  }, [])

  return (
      <Link href={path}>
        <a
            className={btnColor}
        >
          {text}
        </a>
      </Link>
  );
};

OutlineButton.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string
};

export default OutlineButton;
