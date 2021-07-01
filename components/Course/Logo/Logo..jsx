import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const plusPath = '/static/new_img/courses/plus.png';

const Logo = ({logo}) => {
  const logos = [];

  logo.forEach((logoItem, index) => {
    if (index === 0) { // Если картинка курса то вернем ее
      logos.push(
          <img src={logoItem} alt=""/>,
      );
    } else { // Иначе вернем плюсик и картиночку
      logos.push(
          <div className={styles.logo_double}>
            <img className={styles.logo_plus} src={plusPath} alt=""/>
            <img src={logoItem} alt=""/>
          </div>,
      );
    }
  })

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
