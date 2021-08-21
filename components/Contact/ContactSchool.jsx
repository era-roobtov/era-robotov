import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {callSvg, locationSvg, mailSvg} from '@/utils/svgPaths';
import styles from './ContactSchool.module.scss';
import Social from '@/components/Social';

const ContactSchool = ({
                         id,
                         adress,
                         email,
                         tel,
                         title,
                         clipSection,
                         clipMap,
                         mapCord,
                       }) => {
  return (
      <section className={`${styles.contact} ${clipSection}`}>
        <h1 className={styles.contact__header}>
          {title}
        </h1>
        <div className={styles.contact__info}>
          <Link href={`tel:${tel}`}>
            <a>
              <img src={callSvg} alt=""/>
              <span>{tel}</span>
            </a>
          </Link>
          <Link href={`mailto:${email}`}>
            <a>
              <img src={mailSvg} alt=""/>
              <span>{email}</span>
            </a>
          </Link>
          <Link href="#">
            <a>
              <img src={locationSvg} alt=""/>
              <span>{adress}</span>
            </a>
          </Link>
        </div>
        <div className={styles.contact__social}>
          <Social/>
        </div>
        <YMaps>
          <Map className={`${styles.contact__map} ${clipMap}`}
               defaultState={{center: mapCord, zoom: 17}}
          >
              <Placemark geometry={mapCord} />
          </Map>
        </YMaps>
      </section>
  );
};

ContactSchool.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string,
  adress: PropTypes.string,
  clipSection: PropTypes.string,
  clipMap: PropTypes.string,
  mapCord: PropTypes.array.isRequired,
};

export default ContactSchool;
