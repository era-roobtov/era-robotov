import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import styles from '@/assets/index.module.scss';
import Greeting from '@/components/Greeting/Greeting';
import TextList from '@/components/TextList/TextList';
import Advantages from '@/components/Advantages/Advantages';
import Footer from '@/components/Footer/Footer';
import {
  CLIP_BLUE,
  CLIP_ORANGE,
  SHIFT_DOUBLE,
  SHIFT_SINGLE,
} from '@/utils/globalStyles';

const Index = ({textList, advantagesList, aboutUsList}) => {
  const str = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  ];

  console.log('kek')
  return (
      <div className="app">
        <Head>
          <title>Эра роботов</title>
          <meta name="description" content="Школа робототехники Эра роботов"/>
        </Head>
        <Layout>
          <Greeting
              header="Школа программирования для детей"
              btn={{show: true, btnText: 'Выбрать курс'}}
              subText={str}
              imgPath="/static/new_img/greeting/robots.png"
              mobileImgTop={false}
          />
          <Advantages
              {...aboutUsList}
              showBtn={false}
              clip={CLIP_BLUE}
              columnCount={2}
          />
          <div className={styles.robots}/>
          <TextList shiftClass={SHIFT_SINGLE} {...textList} clip={CLIP_ORANGE} />
          <Advantages columnCount={1} shiftClass={SHIFT_DOUBLE} {...advantagesList} showBtn={false} clip={CLIP_BLUE}/>
          <Footer shiftCount='mobileSingle-pcDouble'/>
        </Layout>
      </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      textList: {
        title: 'Чему научится наш слушатель',
        list: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 2',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 3',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 4',
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 5',
        ],
      },
      advantagesList: {
        title: 'Наши преимущества',
        list: [
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.2',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.3',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.4',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.5',
          },
        ],
      },
      aboutUsList: {
        title: 'О нас',
        list: [
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.2',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.3',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.4',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.5',
          },
          {
            imgPath: '/static/new_img/1.png',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.5',
          },
        ],
      },
    },
  };
}

export default Index;
