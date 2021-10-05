import {useContext, useEffect} from "react";
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import styles from '@/assets/index.module.scss';
import Greeting from '@/components/Greeting/Greeting';
import TextList from '@/components/TextList/TextList';
import Advantages from '@/components/Advantages/Advantages';
import Footer from '@/components/Footer/Footer';
import {CLIP_BLUE, CLIP_ORANGE, SHIFT_DOUBLE, SHIFT_SINGLE,} from '@/utils/globalStyles';
import navPaths from "@/utils/paths";
import {SCROLL_NODE, ScrollContext} from "../Context/ScrollContext";

const Index = ({textList, advantagesList}) => {
    const {scroll, setScroll} = useContext(ScrollContext);
    const str = [
        <span className={styles.sub}>
            <p className={styles.sub__paragraph_main}>Место погружения в мир инновационных технологий</p>
            <p className={styles.sub__paragraph_secondary}>и развития потенциала вашего ребенка</p>
        </span>
    ]

    useEffect(() => {
        if (scroll.isScroll === navPaths.home) {
            window.scrollTo({
                top: scroll.cords,
                behavior: 'smooth'
            })
            setScroll({
                isScroll: '',
                cords: null
            })
        }


    }, [])

    return (
        <div className="app">
            <Head>
                <title>Эра роботов</title>
                <meta name="description" content="Школа робототехники Эра роботов"/>
            </Head>
            <Layout>
                <Greeting
                    header={<span><p>Школа</p> программирования и робототехники</span>}
                    btn={{show: true, btnText: 'Выбрать курс'}}
                    subText={str}
                    imgPath="/static/new_img/greeting/robots.png"
                    mobileImgTop={false}
                />
                <div className='orange__boxes_top1'>
                    <div className='orange__box_top'>
                        <section className={`${styles.aboutUs} ${CLIP_BLUE}`}>
                            <h3>О нас</h3>
                            <p>
                                Наша Школа "ЭраРоботов" собрала единомышленников, замечательных преподавателей в области
                                робототехники и программирования. Наши сотрудники имеют высшее техническое образование и
                                уже
                                немалый опыт работы со слушателями разных возрастов, умеют доступно и интересно
                                преподнести
                                информацию. В процессе обучения мы используем новейшее оборудование, качественные наборы
                                для
                                сборки роботов и современное программное обеспечение.
                            </p>
                        </section>
                    </div>
                </div>
                <div className={styles.robots}/>
                <div id='anchor' className='blue__boxes_main2'>
                    <div className='blue__boxes_main2_1'>
                        <div className='blue__boxes_main2_2'>
                            <TextList shiftClass={SHIFT_SINGLE} {...textList} clip={CLIP_ORANGE}/>
                        </div>
                    </div>
                </div>
                <div className='orange__boxes_main3'>
                    <Advantages
                        columnCount={1}
                        shiftClass={SHIFT_DOUBLE} {...advantagesList}
                        showBtn={false} clip={CLIP_BLUE}
                    />
                </div>
                <Footer shiftCount='mobileSingle-pcDouble'/>
            </Layout>
        </div>
    );
};


export async function getStaticProps() {
    return {
        props: {
            textList: {
                title: 'Чему научится ваш ребенок',
                list: [
                    {
                        text: 'Программирование',
                        link: navPaths.courses
                    },
                    {
                        text: 'Создание игр и анимаций',
                        link: navPaths.getDynamicCourse(0)
                    },
                    {
                        text: 'Робототехника и IoT',
                        link: navPaths.getDynamicCourse(1)
                    },
                    {
                        text: 'Создание Android приложений',
                        link: navPaths.getDynamicCourse(6)
                    },
                    {
                        text: 'Инженерные навыки',
                        link: navPaths.getDynamicCourse(5)
                    },
                    {
                        text: 'Разработка нейросетей',
                        link: navPaths.getDynamicCourse(4)
                    },
                    {
                        text: 'Программирование микроконтроллеров',
                        link: navPaths.getDynamicCourse(3)
                    },
                    {
                        text: 'Робототехника для начинающих',
                        link: navPaths.getDynamicCourse(2)
                    }
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
