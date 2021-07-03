import {useEffect, useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {ORANGE, BLUE} from '@/utils/globalStyles';
import styles from './ColorButton.module.scss';

const ColorButton = ({path, text, color, func}) => {
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

  if (path) {
    return (
        <Link href={path}>
          <a
              className={btnColor}
          >
            {text}
          </a>
        </Link>
    );
  } else {
    return (<button onClick={func} className={btnColor}>
      {text}
    </button>);
  }

};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  func: PropTypes.func,
};

export default ColorButton;
