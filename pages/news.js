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
                    text: 'Занятия программированием и робототехникой – лучший вклад в образование ребенка и отличный способ перезагрузиться от школьной рутины 📚\n' +
                        'Будущее за технологиями🤖! Чем раньше ребенок начнет в этом разбираться, тем больше преимуществ и перспектив у него будет 👩🏼‍🏫👨🏻‍💻',
                    imgPath: '/static/new_img/news/third.jpg',
                    link: 'https://www.instagram.com/p/CUUzk9XIMJ4/?utm_source=ig_embed&ig_rid=2c212739-1537-4799-ae07-a8acc30a58a5'
                },
                {
                    text: 'Приглашаем на занятие по робототехнике, которое состоится завтра в @bibliopushkino с 16.30 до 18.30 по адресу Тургенева, 24‼️',
                    imgPath: '/static/new_img/news/first.jpg',
                    link: 'https://www.instagram.com/p/CUXUI5qNQiK/?utm_source=ig_embed&ig_rid=d5d8bec4-b741-4198-b500-4bbe5a17cf5e'
                },
                {
                    text: 'Делимся с вами красивыми фотографиями с мастер-классов и напоминаем, что вы еще успеваете записать своих детей на занятия по созданию приложений, программированию и робототехнике в эти выходные! ',
                    imgPath: '/static/new_img/news/second.jpg',
                    link: 'https://www.instagram.com/p/CUMx4-qgJga/?utm_source=ig_embed&ig_rid=fa179614-0a55-4827-b313-fee9e001052c'
                },
            ]
        },
    };
}

export default News;
