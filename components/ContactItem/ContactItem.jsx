import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { YMaps, Map } from "react-yandex-maps";
import styles from "./ContactItem.module.scss";

const tel = "+7(777)7777777";
const telLink = "tel:" + tel;
const email = "testMailForSendMessage@mail.ru";
const emailLink = "mailto:" + email;

const ContactItem = ({ title, subT, tel, adress, email }) => {

  return (
    <div className={styles.contact}>
      <h3 className={styles.contact__title}>{title}</h3>
      {subT && <p className={styles.contact__subt}>{subT}</p>}
      <Link href={telLink}>
        <a className={styles.contact__tel}>{tel}</a>
      </Link>
      <div className={styles.contact__adress}>
        <p className={styles.contact__adress_holder}>Адрес:</p>
        <p className={styles.contact__adress_text}>{adress}</p>
      </div>
      <div className={styles.contact__email}>
        <p className={styles.contact__email_holder}>Email</p>
        <Link href={emailLink}>
          <a className={styles.contact__email_text}>{email}</a>
        </Link>
      </div>
      <div className={styles.contact__map}>
        <YMaps>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  title: PropTypes.string,
  subT: PropTypes.string,
  tel: PropTypes.string,
  adress: PropTypes.string,
  email: PropTypes.string,
};

export default ContactItem;
