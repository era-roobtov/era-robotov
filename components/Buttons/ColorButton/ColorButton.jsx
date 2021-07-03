import {useEffect, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {ORANGE, BLUE} from '@/utils/colors';
import styles from './ColorButton.module.scss';

const ColorButton = ({path, text, color}) => {
  const [btnColor, setBtnColor] = useState(styles.common);

  useEffect(() => {
    switch (color) {
      case ORANGE:
        setBtnColor(styles.orange);
        break;
      case BLUE:
        setBtnColor(styles.blue);
        break;
      default:
        break;
    }
  }, [color]);

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

ColorButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default ColorButton;
