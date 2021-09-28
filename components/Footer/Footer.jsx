import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Social from '@/components/Social/Social';
import {callSvg, locationSvg, mailSvg} from '@/utils/svgPaths';
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

  return (
      <footer className={footerClass}>
        <div className={styles.info}>
          <div className={styles.contact}>
            <h4 className={styles.info__header}>О нас</h4>
            <p className={styles.info__text}>
              Школа Эра Роботов осуществляет системную подготовку детей по различным направлениям программирования и робототехники по уникальным программам
            </p>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.info__header}>Мы в социальных сетях</h4>
            <Social/>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.info__header}>Контакты</h4>
            <Link href="tel:+7(499)229-40-52">
              <a className={styles.info__text}>
                <img src={callSvg} alt="Звонок"/>
                <span>+7(499)229-40-52</span>
              </a>
            </  Link>
            <Link href="mailto:info@era-robotov.ru">
              <a className={styles.info__text}>
                <img src={mailSvg} alt="Email"/>
                <span>info@era-robotov.ru</span>
              </a>
            </Link>
            <Link href="yandex.ru">
              <a className={styles.info__text}>
                <img src={locationSvg} alt="Локация"/>
                <span>г. Пушкино, 3-й Некрасовский проезд, 3к3</span>
              </a>
            </Link>
          </div>
        </div>
      </footer>
  );
};

Footer.propTypes = {
  shiftCount: PropTypes.any,
};

export default Footer;
