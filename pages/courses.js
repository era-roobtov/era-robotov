import Head from 'next/head';
import React, {useContext, useEffect} from 'react';
import Course from '@/components/Course';
import styles from '@/assets/courses.module.scss';
import Layout from '@/components/Layout/Layout';
import Footer from '@/components/Footer';
import {CLIP_BLUE, CLIP_BLUE_REVERSE} from '@/utils/globalStyles';
import {SCROLL_NODE, ScrollContext} from "../Context/ScrollContext";
import navPaths from "@/utils/paths";

const Courses = ({courses}) => {
    const {scroll, setScroll} = useContext(ScrollContext);
    let reverseClip = true;

    useEffect(() => {
        if (scroll.isScroll === navPaths.courses) {
            window.scrollTo({
                top: scroll.cords,
                behavior: 'smooth'
            });

            return setScroll({
                isScroll: '',
                cords: null
            });
        }

    }, [])

    return (
        <div className={styles.courses}>
            <Head>
                <title>Эра роботов. Курсы</title>
                <meta
                    name="description"
                    content="Курсы школы робототехники Эра роботов"
                />
            </Head>

            <Layout>
                {courses.map((course, index) => {
                        if (index % 2 === 0) {
                            reverseClip = !reverseClip;
                        }

                        return <div className={course.cubes[0]}>
                            <div className={course.cubes[1]}>
                                <Course
                                    clip={reverseClip ? CLIP_BLUE_REVERSE : CLIP_BLUE}
                                    index={index}
                                    key={course.id} {...course}
                                />
                            </div>
                        </div>;
                    },
                )}
                <Footer/>
            </Layout>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            courses: [
                {
                    id: 0,
                    cubes: ['orange__boxes_coursesT1','orange__boxes_coursesT1_1'],
                    title: 'Scratch',
                    asPath: 'Scratch',
                    logo: ['/static/new_img/courses/scratch.png'],
                    description:
                        'Scratch это визуальная среда разработки, предназначенная специально для детей и подростоков желающих погрузиться в мир программирования, а так же научиться создавать игры и анимацию любой сложности.\n' +
                        'Изучение этого языка поможет развить, или укрепить творческие таланты совмещая их с изучением программирования.'
                },
                {
                    id: 1,
                    cubes: ['blue__boxes_coursesT1','blue__boxes_coursesT1_1'],
                    title: 'Arduino',
                    asPath: 'Arduino',
                    logo: ['/static/new_img/courses/arduino.png'],
                    description:
                        'Ардуино это аппартно-программный комплекс позволяющий изучать множество направлений одновременно таких как: программирование, схемотехника, электротехника, робототехника и IoT.\n' +
                        'Изучив Ардуино можно создавать проекты и прототипы разного уровня, начиная от метеостанции, заканчивая системой умного дома.'
                },
                {
                    id: 2,
                    cubes: ['orange__boxes_coursesT2','orange__boxes_coursesT2_1'],
                    title: 'Lego WeDo',
                    asPath: 'LegoWeDo',
                    logo: ['/static/new_img/courses/lego_white.png'],
                    description:
                        'Lego WeDo представляет собой специальный курс для самых юных инженеров и программистов. Ученики познакомятся с робототехникой и концепцией программирования, а так же узнают много интересного об устройстве окружающего мира через создание механизмов и проведение опытов.'
                },
                {
                    id: 3,
                    cubes: ['blue__boxes_coursesT2','blue__boxes_coursesT2_1'],
                    title: 'Scratch и Arduino',
                    asPath: 'ScratchArduino',
                    logo: [
                        '/static/new_img/courses/scratch.png',
                        '/static/new_img/courses/arduino.png',
                    ],
                    description:
                        'Курс предназначен для тех, кто уже владеет навыками программирования в Scratch и хочет подняться на уровень выше. Ученики познакомятся с аппаратной платформой Arduino и языком программирования Си (англ. С), изучат основы схемотехники, научатся  создавать различные устройства и погрузятся в мир робототехники и IoT и всё это на простой и знакомой платформе Scratch.'
                },
                {
                    id: 4,
                    cubes: ['orange__boxes_coursesT1','orange__boxes_coursesT1_1'],
                    title: 'Python',
                    asPath: 'Python',
                    logo: ['/static/new_img/courses/python.png'],
                    description:
                        'Этот курс отлично подойдет тем, кто решил стать программистом, но не знает с чего начать. Благодаря простому синтаксису и богатой экосистеме он прост в освоении и является одним из самых популярных языков программирования в мире.\n' +
                        'Python очень гибкий и универсальный инструмент широко использующийся в разработке игр, IoT, машинном обучении и Web разработке, что выделяет его на фоне других, узконаправленных языков программирования'
                },
                {
                    id: 5,
                    cubes: ['blue__boxes_coursesT1','blue__boxes_coursesT1_1'],
                    title: 'Mindstorms',
                    asPath: 'Mindstorms',
                    logo: ['/static/new_img/courses/mindstorms.png'],
                    description:
                        'Курс Lego Mindstorm предназначен для погружения в мир робототехники и программирования учащихся младшего и среднего возраста. Ученики познакомятся с основами механики и физики, научаться строить алгоритмы движения и управления роботами, а так же проектировать своих роботов для выполнения различных задач.'
                },
                {
                    id: 6,
                    cubes: ['orange__boxes_coursesT2','orange__boxes_coursesT2_1'],
                    title: 'App Inventor',
                    asPath: 'AppInventor',
                    logo: ['/static/new_img/courses/appInventor_logo.png'],
                    description:
                        'Курс App Inventor предназначен для тех, кто уже знаком с визуальными языкам программирования и хочет попробовать себя в чем-то новом. Здесь ученики изучат основы создания приложений и программ для Android  устройств, улучшат свои навыки программирования и узнают много нового о мобильных технологиях'
                },
            ],
        },
    };
}

export default Courses;
