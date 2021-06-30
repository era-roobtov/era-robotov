import styles from "./Footer.module.scss";

const social = [
  {
    name: "facebook",
    img: "/static/new_img/social/Facebook.svg",
  },
  {
    name: "telegram",
    img: "/static/new_img/social/Telegram.svg",
  },
  {
    name: "YouTube",
    img: "/static/new_img/social/YouTube.svg",
  },
  {
    name: "WhatsApp",
    img: "/static/new_img/social/WhatsApp.svg",
  },
  {
    name: "Instagram",
    img: "/static/new_img/social/Instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
          <p className={styles.info__text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <div className={styles.social}>
        {social.map((socialItem) => (
          <img
            className={styles.social__item}
            src={socialItem.img}
            alt={socialItem.name}
            key={socialItem.name}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
