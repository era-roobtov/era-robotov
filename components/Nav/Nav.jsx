import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="list">
        <li className="list__item">
          <p className="list__item__text">Контакты</p>
        </li>
        <li className="list__item">
          <p className="list__item__text">Ифнормация о школе</p>
        </li>
        <li className="list__item">
          <p className="list__item__text">Курсы</p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
