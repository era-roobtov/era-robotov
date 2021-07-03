import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {ORANGE, BLUE} from '@/utils/globalStyles';
import styles from './OutlineButton.module.scss';

const OutlineButton = ({color, path, text, as}) => {
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
  }, []);

  return (
      <Link href={path} as={as}>
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
  text: PropTypes.string,
  as: PropTypes.string,
};

export default OutlineButton;
