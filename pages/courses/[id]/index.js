import {BLUE, CLIP_BLUE_REVERSE} from '@/utils/globalStyles';
import React from 'react';
import {useRouter} from 'next/router';
import Logo from '@/components/Course/Logo';
import Layout from '@/components/Layout';
import ColorButton from '@/components/Buttons/ColorButton';
import LessonDescription from '@/components/LessonDescription';
import LessonWillLearn from '@/components/LessonWillLearn';
import LessonPayCard from '@/components/LessonPayCard';
import Footer from '@/components/Footer';
import Request from '@/components/Forms/Request';
import styles from './index.module.scss';
import {calcThree, calcTwo} from "@/utils/calcPrices";
import Age from "@/components/Age";

const Course = () => {
    const [requestForm, setRequestForm] = React.useState(false);
    const handleClick = () => {
        setRequestForm(!requestForm);
    };

    const courses = {
        0: {
            title: 'Scratch',
            logo: ['/static/new_img/courses/scratch.png'],
            description:
                'Scratch это визуальная среда разработки, предназначенная специально для детей и подростоков желающих погрузиться в мир программирования, а так же научиться создавать игры и анимацию любой сложности.\n' +
                'Изучение этого языка поможет развить, или укрепить творческие таланты совмещая их с изучением программирования.',
            descriptionList: [
                'Знакомство со средой программирования Scratch',
                'Изучение основ программирования',
                'Изучение основ алгоритмики',
                'Создание простых анимаций',
                'Изучение логики движения в анимации',
                'Изучение управляющих операторов',
                'Создание сложных анимаций',
                'Контрольные работы',
                'Создание простых игр',
                'Изучение функционального программирования',
                'Изучение логики взаимодействия между объектами',
                'Изучение способов хранения и передачи данных',
                'Работа с расширенными инструментами',
                'Создание сложных игр',
                'Изучение массивов и списков',
                'Проектные работы'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Базовые навыки в \n' +
                        'программировании',
                },
                {
                    imgPath: '/static/imgs/bg_pika.png',
                    text: 'Создавать анимации\n' +
                        'и игры различной сложности'
                },
                {
                    imgPath: '/static/imgs/bg_chat.png',
                    text: 'Получит опыт в создании и защите своих проектных работ',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 72 часа (2 часа в неделю)',
                cost: [500, calcTwo(500)],
            },
            age: '7-9'
        },
        1: {
            title: 'Arduino',
            logo: ['/static/new_img/courses/arduino.png'],
            description: 'Ардуино это аппартно-программный комплекс позволяющий изучать множество направлений одновременно таких как программирование, схемотехника, электротехника, робототехника и IoT.\n' +
                'Изучив Ардуино можно создавать проекты и прототипы разного уровня, начиная от метеостанции, заканчивая системой умного дома.',

            descriptionList: [
                'Знакомство со средой программирования Arduino',
                'Изучение основ программирования',
                'Изучение основ алгоритмики',
                'Сборка простейших электросхем',
                'Работа с датчиками',
                'Функциональное программирование',
                'Изучение базовых алгоритмов движения',
                'Контрольные работы',
                'Работа со сложными датчиками',
                'Фильтрация данных',
                'Работа с массивами данных',
                'Датчики определения положения в пространстве',
                'Продвинутые алгоритмы движения',
                'Автоматизация (IOT)',
                'Работа со средствами ввода информации',
                'Проектные работы'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Базовые навыки \n' +
                        'программирования на \n' +
                        'высокоуровневом яп',
                },
                {
                    imgPath: '/static/imgs/bg_multiSelect.png',
                    text: 'Понимание принципов работы\n' +
                        'микроконтроллеров и переферии',
                },
                {
                    imgPath: '/static/imgs/bg_settings.png',
                    text: 'Создание собственных устройств используя знания схемотехники, механики и электротехники',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 108 часов (3 часа в неделю)',
                cost: [800, calcThree(800)],
                hours: 'р / 1.5 часа'
            },
            age: '10+'
        },
        2: {
            title: 'Lego WeDo',
            logo: ['/static/new_img/courses/lego.png'],
            description: 'Lego WeDo представляет собой специальный курс для самых юных инженеров и программистов. Ученики познакомятся с робототехникой и концепцией программирования, а так же узнают много интересного об устройстве окружающего мира через создание механизмов и проведение опытов.',

            descriptionList: [
                'Знакомство с робототехникой',
                'Знакомство со средой разработки',
                'Простые алгоритмы движения',
                'Работа с датчиками',
                'Простая механика',
                'Сборка роботов простого уровня',
                'Механика среднего уровня',
                'Сборка робоов среднего уровня'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_settings.png',
                    text: 'Познакомится с миром\n' +
                        'робототехники',
                },
                {
                    imgPath: '/static/imgs/bg_research.png',
                    text: 'Научится создавать алгоритмы\n' +
                        'и понимать как их применять',
                },
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Получит базовые знания о программировании ',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 72 часа (2 часа в неделю)',
                cost: [600, calcTwo(600)],
            },
            age: '6-7'
        },
        3: {
            title: 'Scratch + Arduino',
            logo: [
                '/static/new_img/courses/scratch.png',
                '/static/new_img/courses/arduino.png',
            ],
            description: 'Курс предназначен для тех кто уже владеет навыками программирования в Scratch и хочет подняться на уровень выше. Ученики познакомятся с аппаратной платформой Arduino и языком программирования Си (англ. С), изучат основы схемотехники, научатся  создавать различные устройства и погрузятся в мир робототехники и IoT и всё это на простой и знакомой платформе Scratch.',

            descriptionList: [
                'Знакомство со средой программирования Arduino в Scratch',
                'Изучение основ программирования',
                'Изучение основ алгоритмики',
                'Сборка простейших электросхем',
                'Работа с датчиками',
                'Функциональное программирование',
                'Изучение принципов работы с моторами и сервоприводами',
                'Контрольные работы',
                'Переход на язык Arduino C',
                'Знакомство со сложными датчиками',
                'Работа с массивами данных',
                'Датчики определения положения в пространстве',
                'Простые алгоритмы движения',
                'Простая автоматизация (IOT)',
                'Работа со средствами вывода информации',
                'Проектные работы'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Легкое введение в высокоуровневое программирование',
                },
                {
                    imgPath: '/static/imgs/bg_multiSelect.png',
                    text: 'Понимание базовых принципов работы микроконтроллеров и переферии',
                },
                {
                    imgPath: '/static/imgs/bg_settings.png',
                    text: 'Создание собственных проектов используя базовые знания схемотехники, механики и электротехники',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 72 часа (2 часа в неделю)',
                cost: [500, calcTwo(500)],
            },
            age: '9-10'
        },
        4: {
            title: 'Python',
            logo: ['/static/new_img/courses/python.png'],
            description: 'Этот курс отлично подойдет тем кто решил стать программистом, но не знает с чего начать. Благодаря простому синтаксису и богатой экосистеме он прост в освоении и является одним из самых популярных яп в мире.\n' +
                'Python очень гибкий и универсальный инструмент широко использующийся в разработке игр, IoT, машинном обучении и Web разработке, что выделяет его на фоне других, узконаправленных языков программирования',

            descriptionList: [
                'Знакомство с языком программирования Python',
                'Переменные и простые операции с числами',
                'Строки и ветвление',
                'Циклы while и for',
                'Списки и кортежи',
                'Словари и сортровка',
                'Функции',
                'Библиотеки и их применение',
                'Создание Telegramm бота',
                'Работа с файлами',
                'Работа с датой и временем',
                'Знакомство с нейросетями. Пишем перцептрон',
                'OpenCV в Python и робототехнике',
                'Объектно-ориентированное программирование',
                'Программы для обработки и анализа данных',
                'Проектные работы',
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Базовые навыки \n' +
                        'программирования на \n' +
                        'высокоуровневом яп',
                },
                {
                    imgPath: '/static/imgs/bg_brain.png',
                    text: 'Основные навыки для создания нейросетей',
                },
                {
                    imgPath: '/static/imgs/bg_research.png',
                    text: 'Создание программ для обработки данных и управления переферией ',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 108 часа (3 часа в неделю)',
                cost: [800, calcThree(800)],
                hours: 'р / 1.5 часа'
            },
            age: '10+'
        },
        5: {
            title: 'Lego',
            logo: ['/static/new_img/courses/mindstorms.png'],
            description: 'Курс Lego Mindstorm предназначен для погружение в мир робототехники и программирования учащихся младшего и среднего возраста. Ученики познакомятся с основами механики и физики, научаться строить алгоритмы движения и управления роботами, а так же проектировать своих роботов для выполнения различных задач.',

            descriptionList: [
                'Знакомство с робототехникой',
                'Простые алгоритмы движения',
                'Работа с датчиками',
                'Простая механика',
                'Изучение управляющих операторов',
                'Алгоритмы движения с использованием датчиков',
                'ТРИЗ',
                'Разбор и решение олимпиадных задач',
                'Способы хранения и передачи данных. Переменные',
                'Изучения логических операторов',
                'Сложные алгоритмы движения',
                'Функциональное программирование',
                'Сложная механика',
                'Большие объемы данных. Массивы',
                'Дистанционное управление роботом',
                'Решение олимпиадных задач WRO'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_brick.png',
                    text: 'Проектировать и создавать собственные роботизированные конструкции',
                },
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Базовые навыки программирования позволят в дальнейшем изучать высокоуровневые ЯП',
                },
                {
                    imgPath: '/static/imgs/bg_student.png',
                    text: 'Развитие пространственного\n' +
                        'мышления поможет в изучении новых направлений для развития в будущем',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 72 часа (2 часа в неделю)',
                cost: [500, calcTwo(500)],
            },
            age: '7-9'
        },
        6: {
            title: 'App Inventor',
            logo: ['/static/new_img/courses/appInventor_logo.png'],
            description: 'Курс App Inventor предназначен для тех кто уже знаком с визуальными языкам программирования и хочет попробовать себя в чем то новом. Здесь ученики изучат основы создания приложений и программ для Andriod  устройств, улучшат свои навыки программирования и узнают много нового о мобильных технологиях',

            descriptionList: [
                'Знакомство со средой программирования App Inventor',
                'Описание работы Android-приложений',
                'Типы данных',
                'Понятие алгоритма',
                'Ветвление',
                'Циклы',
                'Обработка действий пользователя',
                'Функции',
                'Слои',
                'Медиа',
                'Сенсоры телефона',
                'Хранение данных приложения',
                'Рисование',
                'Создание элементарных анимаций',
                'Проектирование приложения',
                'Проектные работы'
            ],
            willLearn: [
                {
                    imgPath: '/static/imgs/bg_screen.png',
                    text: 'Базовые навыки программирования',
                },
                {
                    imgPath: '/static/imgs/bg_android.png',
                    text: 'Создание приложений для Andriod устройств',
                },
                {
                    imgPath: '/static/imgs/bg_phone.png',
                    text: 'Необходимые знания для развития в области программирования для мобильных устройств',
                },
            ],
            payCard: {
                description: 'Продолжительность курса 72 часа (2 часа в неделю)',
                cost: [600, calcTwo(600)],
            },
            age: '9-10'
        },
    };

    const router = useRouter();
    const {id} = router.query;

    return (
        <Layout>
            {id && <React.Fragment>
                <section id={`course${id}`} className={styles.course}>
                    <div className={styles.course__logo}>
                        <Logo logo={courses[id]?.logo}/>
                    </div>
                    <h1 className={styles.course__header}>{courses[id]?.title}</h1>
                    <Age text={courses[id]?.age}/>
                    <p className={styles.course__description}>
                        {courses[id]?.description}
                    </p>
                    {/*<div className={styles.course__btn}>*/}
                    {/*  <ColorButton text="Купить" color={BLUE} func={handleClick}/>*/}
                    {/*</div>*/}
                </section>
                <div className='orange__boxes_course'>
                    <div className='orange__boxes_course_1'>
                        <LessonDescription
                            id={id}
                            descriptionList={courses[id]?.descriptionList}
                            clip={CLIP_BLUE_REVERSE}
                        />
                    </div>
                </div>
                <LessonWillLearn list={courses[id]?.willLearn}/>
                <div className='blue__boxes_course'>
                    <div className='blue__boxes_course_1'>
                        <div className='blue__boxes_course_2'>
                            <LessonPayCard requestFun={handleClick} {...courses[id]?.payCard}/>
                        </div>
                    </div>
                </div>
                <Footer shift={false}/>
                <Request
                    isOpen={requestForm}
                    fun={handleClick}
                    title={courses[id]?.title}
                />
            </React.Fragment>}
        </Layout>
    );
};

export default Course;
