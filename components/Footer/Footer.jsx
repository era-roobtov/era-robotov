import PropTypes from 'prop-types';
import Link from 'next/link';
import Social from '@/components/Social/Social';
import styles from './Footer.module.scss';

const Footer = ({shift}) => {
  return (
      <footer style={{marginTop: shift}} className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.footer__info}>
            <h4 className={styles.info__header}>О школе</h4>
            <p className={styles.info__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className={styles.footer__info}>
            <h4 className={styles.info__header}>Инфо</h4>
            <p className={styles.info__text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className={styles.footer__info}>
            <h4 className={styles.info__header}>Контакты</h4>
            <Link href="tel:+7(495)343-44-66">
              <a className={styles.info__text}>+7 (495) 343-44-66</a>
            </  Link>
            <Link href="mailto:222222@gmal.com">
              <a className={styles.info__text}>222222@gmal.com</a>
            </Link>
            <Link href="yandex.ru">
              <a className={styles.info__text}>г. Пушкино, ул. </a>
            </Link>
          </div>
        </div>
        <Social/>
      </footer>
  );
};

Footer.propTypes = {
  shift: PropTypes.string,
};

export default Footer;
