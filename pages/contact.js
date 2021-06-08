import Head from "next/head";
import ContactItem from "@/components/ContactItem";
import Layout from "@/components/Layout/Layout";
import styles from "@/assets/contact.module.scss";

const headerTitle = "Наши контакты";

const schools = [
  {
    id: 0,
    title: "Эра роботов Пушкино",
    subT: "Школа робототехники",
    adress: "Ул. Пушкина, дом Колотушкина",
    email: "mailTo@m.ru",
    tel: "+77777777777",
  },
];

const Contact = () => {
  return (
    <div className={styles.contact__container}>
      <Head>
        <title>Робомир. Контакты</title>
        <meta
          name="description"
          content="Контакты школы робототехники Эра роботов"
        />
      </Head>
      <Layout headerText={headerTitle}>
        <div className={styles.contacts}>
          {schools.map((school) => {
            console.log(school);
            const { title, subT, adress, email, tel, id } = school;
            return (
              <ContactItem
                key={id}
                title={title}
                subT={subT}
                adress={adress}
                email={email}
                tel={tel}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
