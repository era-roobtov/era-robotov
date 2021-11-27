import Head from 'next/head';
import Layout from "@/components/Layout";
import NewsItem from "@/components/NewsItem";
import styles from '@/assets/news.module.scss';
import Footer from "@/components/Footer";
import {BLUE, ORANGE} from "@/utils/globalStyles";

const News = ({news}) => {
  return <div>
    <Head>
      <title>Эра роботов. Новости</title>
      <meta
        name="description"
        content="Новости школы робототехники Эра роботов"
      />
    </Head>
    <Layout>
      <h1 className={styles.news__header}>Новости</h1>
      <section className={styles.news}>
        {
          news.map((newsItem, index) => <NewsItem {...newsItem} color={index & 1 ? ORANGE : BLUE}/>)
        }
      </section>
      <Footer/>
    </Layout>
  </div>
}

export async function getStaticProps() {
  return {
    props: {
      news: [
        {
          text: '28 августа состоялся бесплатный мастер-класс «Битва роботов» для детей в возрасте от 6 до 15 лет, где наши преподаватели познакомили гостей с роботизированной платформой, показали, как работает 3D-принтер, а также помогли участникам собрать их первых роботов. ',
          imgPath: '/static/new_img/news/1_new_post.jpg',
          link: 'https://www.instagram.com/p/CTJr6O7g6NA/'
        },
        {
          text: '4 сентября центр дополнительного образования «Эра роботов» провел ещё один мастер-класс. Преподаватели знакомили учеников со средами программирования Scratch и App Invento.\n' +
              'В процессе обучения дети смогли самостоятельно создать приложение для Android и компьютерную игру.\n',
          imgPath: '/static/new_img/news/2_new_post.jpg',
          link: 'https://www.instagram.com/p/CTcGbG3gLb_/'
        },
        {
          text: 'Планы на выходные есть? А, если найдем? \n' +
              'Приглашаем всех желающих на бесплатный мастер-класс по робототехнике 12 сентября. \n' +
              '\n' +
              'Программа делится на два уровня:\n' +
              'lego - конструирование и программирование робота-футболиста ⚽\n' +
              'Scratch + Arduino - собираем простую электрическую цепь, пишем программу, запускаем роботизированную платформу и просто здорово проводим время в приятной компании\n',
          imgPath: '/static/new_img/news/3_new_post.jpg',
          link: 'https://www.instagram.com/p/CTy5y-Fr-Nl/'
        },
        {
          text: 'Предлагаем отвлечься от рабочей рутины и посмотреть фотографии с наших занятий 🙌\n' +
              '\n' +
              'Выходные наши ученики провели продуктивно: создавали приложения и программы для Android-устройств 📲, познакомились со средой разработки Scratch для Arduino, осваивали робототехнику, стали на шаг ближе к разработке собственных устройств и созданию своего приложения.\n',
          imgPath: '/static/new_img/news/4_new_post.jpg',
          link: 'https://www.instagram.com/p/CUCiIuxgsR7/'
        },
        {
          text: 'Делимся с вами красивыми фотографиями с мастер-классов и напоминаем, что вы еще успеваете записать своих детей на занятия по созданию приложений, программированию и робототехнике \n' +
              '\n' +
              'Занятия программированием и робототехникой – лучший вклад в образование ребенка и отличный способ перезагрузиться от школьной рутины.\n',
          imgPath: '/static/new_img/news/5_new_post.jpg',
          link: 'https://www.instagram.com/p/CUMx4-qgJga/'
        },
        {
          text: 'Каждый родитель желает своему ребёнку лучшего и хочет быть уверен в качестве выбранного образования \n' +
              'Что мы предлагаем❓\n' +
              '- Удобное расположение в центре города Пушкино 🏙\n' +
              '- Скидки 10 % при покупке блока из 4 занятий 💸\n' +
              '- Молодой преподавательский состав с профильным образованием🎓\n' +
              '- Новое и качественное оборудование 💻🤖\n' +
              '- Уникальная программа занятий📚\n' +
              '- Мы любим и верим в то, чем занимаемся, поэтому делаем это хорошо! ❤\n' +
              'Приходите к нам и убедитесь в этом!\n',
          imgPath: '/static/new_img/news/6_new_post.jpg',
          link: 'https://www.instagram.com/p/CUsMCJkNZMV/'
        }
      ]
    },
  };
}

export default News;
