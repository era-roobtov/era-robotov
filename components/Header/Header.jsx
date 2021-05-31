import PropTypes from "prop-types";
import Link from "next/link";
import navPaths from "@/utils/paths";
import "./Header.scss";

const Header = ({ header }) => {
  const { about, contact, courses } = navPaths;
  return (
    <header className="header">
      <h1 className="header__heading">{header}</h1>
      <nav className="header__nav">
        <ul className="list">
          <li className="list__item">
            <Link href={courses}>
              <a className="list__item__text">Курсы</a>
            </Link>
          </li>
          <li className="list__item">
            <Link href={about}>
              <a className="list__item__text">Ифнормация о школе</a>
            </Link>
          </li>
          <li className="list__item">
            <Link href={contact}>
              <a className="list__item__text">Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.string,
};

export default Header;