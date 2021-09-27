import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import styles from '@/assets/contact.module.scss';
import Footer from '@/components/Footer';
import ContactSchool from '@/components/Contact';
import {CLIP_BLUE, CLIP_MAP} from '@/utils/globalStyles';

const Contact = ({contacts}) => {
  return (
      <div className={styles.contact__container}>
        <Head>
          <title>Эра роботов. Контакты</title>
          <meta
              name="description"
              content="Контакты школы робототехники Эра роботов"
          />
        </Head>
        <Layout>
          {contacts.map(
              (school) => <ContactSchool
                  key={school.id} {...school}
                  clipSection={CLIP_BLUE}
                  clipMap={CLIP_MAP}
              />)}
          <Footer shift={false}/>
        </Layout>
      </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      contacts: [
        {
          id: 0,
          title: 'Контакты',
          tel: '+7(499)229-40-52',
          email: 'info@era-robotov.ru',
          adress: 'г. Пушкино, 3-й Некрасовский проезд, 3к3',
          mapCord: [56.015933, 37.851125],
        },
      ],
    },
  };
}

export default Contact;
