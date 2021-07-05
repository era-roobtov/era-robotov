import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Social from '@/components/Social/Social';
import styles from './Footer.module.scss';

const Footer = ({shiftCount}) => {
  const [footerClass, setFooterClass] = useState(styles.footer_zero);
  useEffect(() => {
    switch (shiftCount) {
      case 1:
        setFooterClass(styles.footer_single);
        break;
      case 2:
        setFooterClass(styles.footer_double);
        break;
      case 'mobileSingle-pcDouble':
        setFooterClass(styles.footer_singleDouble);
        break;
      default:
        setFooterClass(styles.footer_zero);
        break;
    }
  }, []);
  {console.log(footerClass)}
  return (
      <footer className={footerClass}>
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
  shiftCount: PropTypes.any,
};

export default Footer;
