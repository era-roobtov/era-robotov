import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const plusPath = '/static/new_img/courses/plus.png';

const Logo = ({logo}) => {
  const logos = [];

  if (logo.length === 2) {
    logos.push(
        <React.Fragment key={logo[1]}>
          <img src={logo[0]} alt=""/>
          <img className={styles.logo_plus} src={plusPath} alt=""/>
          <img src={logo[1]} alt=""/>
        </React.Fragment>,
    );
  } else {
    logos.push(
        <img key={logo[0]} src={logo[0]} alt=""/>,
    );
  }

  return (
      <div className={`${logo.length > 1 ? styles.logo_double : styles.logo}`}>
        {logos}
      </div>
  );
};

Logo.propTypes = {
  logo: PropTypes.array,
};

export default Logo;
