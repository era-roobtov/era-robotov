import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import "@/assets/contact.scss";

const headerTitle = "Наши контакты";
const tel = "+7(777)7777777";
const telLink = "tel:" + tel;
const email = "testMailForSendMessage@mail.ru";
const emailLink = "mailto:" + email;

const Contact = () => {
  return (
    <div className="contact__container">
      <Head>
        <title>Робомир. Контакты</title>
        <meta
          name="description"
          content="Контакты школы робототехники Эра роботов"
        />
      </Head>
      <Layout headerText={headerTitle}>
        <div className="contact">
          <h2 className="contact__title">Свяжитесь с нашим администратором</h2>
          <Link href={telLink}>
            <a className="contact__tel">{tel}</a>
          </Link>
          <Link href={emailLink}>
            <a className="contact__email">{email}</a>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
