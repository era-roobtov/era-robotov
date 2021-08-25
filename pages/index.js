import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import styles from '@/assets/index.module.scss';
import Greeting from '@/components/Greeting/Greeting';
import TextList from '@/components/TextList/TextList';
import Advantages from '@/components/Advantages/Advantages';
import Footer from '@/components/Footer/Footer';
import {bigLogo} from "@/utils/logoPaths";
import {
    CLIP_BLUE,
    CLIP_ORANGE, ORANGE_BOX_TOP, ORANGE_BOXES_TOP1,
    SHIFT_DOUBLE,
    SHIFT_SINGLE,
} from '@/utils/globalStyles';
import mergeStyles from '@/utils/mergeStyles';
import {useEffect, useState} from "react";

const Index = ({textList, advantagesList, aboutUsList}) => {
    const str = [
        'Место погружения в мир инновационных технологий и развития потенциала вашего ребенка',
    ];

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
                <div className='orange__boxes_top1'>
                    <div className='orange__box_top'>
                        <section className={`${styles.aboutUs} ${CLIP_BLUE}`}>
                            <h3>О нас</h3>
                            <p>
                                Наша Школа "ЭраРоботов" собрала единомышленников, замечательных преподавателей в области
                                робототехники и программирования. Наши сотрудники имеют высшее техническое образование и уже
                                немалый опыт работы со слушателями разных возрастов, умеют доступно и интересно преподнести
                                информацию. В процессе обучения мы используем новейшее оборудование, качественные наборы для
                                сборки роботов и современное программное обеспечение.
                            </p>
                        </section>
                    </div>
                </div>
                <div className={styles.robots}/>
                <div className='blue__boxes_main2'>
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

// timer page
// const date = new Date();
// const openDate = new Date(2021, 8, 1, 0, 0, 0);
// const openObj = {
//     h: openDate.getHours(),
//
// }
// console.log(openDate)
//
// let endT = {
//     day: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
// }
//
// function timer() {
//     var nowDate = new Date();
//     var achiveDate = new Date(2021, 8, 1, 0, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
//     var result = (achiveDate - nowDate) + 1000;
//     if (result < 0) {
//         var elmnt = document.getElementById('timer');
//         elmnt.innerHTML = ' - : - - : - - : - - ';
//         return undefined;
//     }
//     endT = {
//         day: Math.floor(result / 1000 / 60 / 60 / 24),
//         hours: Math.floor((result / 1000 / 60 / 60) % 24),
//         minutes: Math.floor((result / 1000 / 60) % 60),
//         seconds: Math.floor((result / 1000) % 60)
//     }
//     // var seconds = Math.floor((result/1000)%60);
//     // var minutes = Math.floor((result/1000/60)%60);
//     // var hours = Math.floor((result/1000/60/60)%24);
//     // var days = Math.floor(result/1000/60/60/24);
//     if (endT.seconds < 10) endT.seconds = '0' + endT.seconds;
//     if (endT.minutes < 10) endT.minutes = '0' + endT.minutes;
//     if (endT.hours < 10) endT.hours = '0' + endT.hours;
//     console.log('timer >>> ', endT)
//     // elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
//     setTimeout(timer, 1000);
// }
//
// timer();

// return (
//     <section className={styles.temp}>
//         <img src={bigLogo} alt="Эра роботов"/>
//         <div>
//             <p>Сайт откроется через: </p>
//             <p>{endT.day} Дней {endT.hours} часов {endT.minutes} минут {endT.seconds} секунд</p>
//         </div>
//     </section>
// )