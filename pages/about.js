import Head from 'next/head';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Greeting from '@/components/Greeting';

const About = () => {
  return (
      <div className="about">
        <Head>
          <title>Эра роботов. О нас</title>
          <meta name="description" content="О школе робототехники"/>
        </Head>
        <Header header='О нас'/>
        <Layout>
          <Greeting
              header="О школе"
              btn={{show: false}}
              subText={`Школа робототехники "ЭраРоботов" собрала лучших преподавателей , настоящих знатоковв области робототехники и программирования. Наши коллеги занимаются с детьми с 2016года и имеют за спиной огромный опыт в сфере образования.
Мы предоставляем новейшее оборудование и наборы , чтобы ребята занимались вкомфорте и получали только положительные эммоции

Данные курсы включают в себя обновленную среду программирования иробототехнику
на базе Lego Mindstorm (SPIKE)`}
              imgPath="/static/new_img/robots.png"
              mobileImgTop={true}
          />

        </Layout>
      </div>
  );
};

export default About;
