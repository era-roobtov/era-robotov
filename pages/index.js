import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import styles from '@/assets/index.module.scss';
import Greeting from '@/components/Greeting/Greeting';
import TextList from '@/components/TextList/TextList';
import Advantages from '@/components/Advantages/Advantages';
import Footer from '@/components/Footer/Footer';
import {
    CLIP_BLUE,
    CLIP_ORANGE, ORANGE_BOX_TOP, ORANGE_BOXES_TOP1,
    SHIFT_DOUBLE,
    SHIFT_SINGLE,
} from '@/utils/globalStyles';
import mergeStyles from '@/utils/mergeStyles';

const Index = ({textList, advantagesList, aboutUsList}) => {
    const str = [
        'Место погружения в мир инновационных технологий и развития потенциала вашего ребенка',
    ];

    console.log('kek');
    return (
        <div className="app">
            <Head>
                <title>Эра роботов</title>
                <meta name="description" content="Школа робототехники Эра роботов"/>
            </Head>
            <Layout>
                <Greeting
                    header="Школа программирования и робототехники Эра Роботов"
                    btn={{show: true, btnText: 'Выбрать курс'}}
                    subText={str}
                    imgPath="/static/new_img/greeting/robots.png"
                    mobileImgTop={false}
                />
                <section className={`${styles.aboutUs} ${CLIP_BLUE}`}>
                    <h3>О нас</h3>
                    <p>
                        Наша Школа "ЭраРоботов" собрала единомышленников, замечательных преподавателей в области робототехники и программирования. Наши сотрудники имеют высшее техническое образование и уже немалый опыт работы со слушателями разных возрастов, умеют доступно и интересно преподнести информацию. В процессе обучения мы используем новейшее оборудование, качественные наборы для сборки роботов и современное программное обеспечение.
                    </p>
                </section>
                {/*<Advantages*/}
                {/*    {...aboutUsList}*/}
                {/*    showBtn={false}*/}
                {/*    clip={CLIP_BLUE}*/}
                {/*    columnCount={2}*/}
                {/*    boxesClass={mergeStyles(ORANGE_BOXES_TOP1, ORANGE_BOX_TOP)}*/}
                {/*/>*/}
                <div className={styles.robots}/>
                <TextList shiftClass={SHIFT_SINGLE} {...textList} clip={CLIP_ORANGE}/>
                <Advantages
                    columnCount={1}
                    shiftClass={SHIFT_DOUBLE} {...advantagesList}
                    showBtn={false} clip={CLIP_BLUE}
                />
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
                    'Программирование',
                    'Создание игр и анимаций',
                    'Создание игр и анимаций',
                    'Создание Android приложений',
                    'Инженерные навыки',
                    'Разработка нейросетей'
                ],
            },
            advantagesList: {
                title: 'Наши преимущества',
                list: [
                    {
                        imgPath: '/static/imgs/book.png',
                        text: 'Уникальная учебная программа',
                    },
                    {
                        imgPath: '/static/imgs/cap.png',
                        text: 'Коллектив опытных преподавателей - практиков',
                    },
                    {
                        imgPath: '/static/imgs/screen.png',
                        text: 'Новейшее оборудование',
                    },
                    {
                        imgPath: '/static/imgs/reward.png',
                        text: 'Опыт в подготовке и участия в соревнованиях',
                    },
                    {
                        imgPath: '/static/imgs/puzzle.png',
                        text: 'Множество направлений обучения',
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
