import Head from 'next/head';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Greeting from '@/components/Greeting';
import Advantages from '@/components/Advantages';
import {CLIP_BLUE, CLIP_ORANGE} from '@/utils/globalStyles';
import Footer from '@/components/Footer';
import Teachers from '@/components/Teachers';

const About = ({advantagesList, teachersList, subText}) => {

  return (
      <div className="about">
        <Head>
          <title>Эра роботов. О нас</title>
          <meta name="description" content="О школе робототехники"/>
        </Head>
        <Layout>
          <Greeting
              header="О школе"
              btn={{show: false}}
              subText={subText}
              imgPath="/static/new_img/greeting/robots.png"
              mobileImgTop={true}
          />
          <Advantages {...advantagesList} shift="0" showBtn={true} clip={CLIP_ORANGE}/>
          <Teachers {...teachersList} clip={CLIP_BLUE}/>
          <Footer/>
        </Layout>
      </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      advantagesList: {
        title: 'Наши преимущества',
        list: [
          {
            imgPath: 'static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1',
          },
          {
            imgPath: '/static/new_img/advantages/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.2',
          },
          {
            imgPath: '/static/new_img/advantages/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.3',
          },
          {
            imgPath: '/static/new_img/advantages/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.4',
          },
          {
            imgPath: '/static/new_img/advantages/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.5',
          },
        ],
      },
      teachersList: {
        title: 'Преподаватели',
        list: [
          {
            text: 'Lorem ipsum',
            avatar: '/static/new_img/teachers/1.png',
          },
          {
            text: 'Lorem ipsum',
            avatar: '/static/new_img/teachers/2.png',
          },
          {
            text: 'Lorem ipsum',
            avatar: '/static/new_img/teachers/3.png',
          },
          {
            text: 'Lorem ipsum',
            avatar: '/static/new_img/teachers/4.png',
          },
          {
            text: 'Lorem ipsum',
            avatar: '/static/new_img/teachers/5.png',
          },
        ],
      },
      subText: [
        'Школа робототехники "ЭраРоботов" собрала лучших преподавателей , настоящих знатоковв области робототехники и программирования. Наши коллеги занимаются с детьми с 2016года и имеют за спиной огромный опыт в сфере образования.',
        'Мы предоставляем новейшее оборудование и наборы , чтобы ребята занимались вкомфорте и получали только положительные эммоции.',
        'Данные курсы включают в себя обновленную среду программирования иробототехнику на базе Lego Mindstorms (SPIKE)'],
    },
  };
}

export default About;
