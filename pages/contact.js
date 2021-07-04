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
          <Footer shift="0"/>
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
          tel: '+7(495)343-44-66',
          email: '222222@gmal.com',
          adress: 'г. Пушкино, ул. ',
          mapCord: [56.011318, 37.847164],
        },
      ],
    },
  };
}

export default Contact;
