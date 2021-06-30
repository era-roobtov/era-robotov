import PropTypes from "prop-types";
import Link from "next/link";
import navPaths from "@/utils/paths";
import styles from "./Header.module.scss";

const Header = ({ header, burger, handler }) => {
  const { about, contact, courses, home } = navPaths;
  let burgerStyle = "";

  switch (burger) {
    case "open": {
      burgerStyle = styles.header__nav_open;
      break;
    }
    case "closed": {
      burgerStyle = styles.header__nav_closed;
      break;
    }
    default: {
      break;
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}></div>
      <div onClick={() => handler()} className={`${styles.burgerContainer} `}>
        <div
          className={`${styles.hamburgerToClose} ${burger === "open" ? styles.close : ""}`}
        >
          <div className={styles.hamburgerMiddle} />
        </div>
      </div>
      <nav className={`${styles.header__nav} ${burgerStyle}`}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link href={home}>
              <a className={styles.list__item__text}>Главная</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={courses}>
              <a className={styles.list__item__text}>Курсы</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={about}>
              <a className={styles.list__item__text}>О школе</a>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href={contact}>
              <a className={styles.list__item__text}>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.string,
  burger: PropTypes.string,
  handler: PropTypes.func,
};

export default Header;
