import PropTypes from "prop-types";
import Link from "next/link";
import "./ContactItem.scss";

const tel = "+7(777)7777777";
const telLink = "tel:" + tel;
const email = "testMailForSendMessage@mail.ru";
const emailLink = "mailto:" + email;

const ContactItem = ({ title, subT, tel, adress, email }) => {
  console.warn(title);
  return (
    <div className="contact">
      <h3 className="contact__title">{title}</h3>
      {subT && <p className="contact__subt">{subT}</p>}
      <Link href={telLink}>
        <a className="contact__tel">{tel}</a>
      </Link>
      <div className="contact__adress">
        <p className="contact__adress_holder">Адрес:</p>
        <p className="contact__adress_text">{adress}</p>
      </div>
      <div className="contact__email">
        <p className="contact__email_holder">Email</p>
        <Link href={emailLink}>
          <a className="contact__email_text">{email}</a>
        </Link>
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
