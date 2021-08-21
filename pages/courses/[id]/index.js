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
                    text: 'Базовые навыки в \n' +
                        'программировании',
                },
                {
                    imgPath: '/static/imgs/bg_chat.png',
                    text: 'Получит опыт в создании и защите своих проектных работ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
        },
        1: {
            title: 'Arduino',
            logo: ['/static/new_img/courses/arduino.png'],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

            descriptionList: [
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
            willLearn: [
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
        },
        2: {
            title: 'Lego WeDo',
            logo: ['/static/new_img/courses/lego.png'],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

            descriptionList: [
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
            willLearn: [
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
        },
        3: {
            title: 'Scratch и Arduino',
            logo: [
                '/static/new_img/courses/scratch.png',
                '/static/new_img/courses/arduino.png',
            ],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

            descriptionList: [
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
            willLearn: [
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
        },
        4: {
            title: 'Python',
            logo: ['/static/new_img/courses/python.png'],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

            descriptionList: [
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
            willLearn: [
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
        },
        5: {
            title: 'Mindstorms',
            logo: ['/static/new_img/courses/mindstorms.png'],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

            descriptionList: [
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
            willLearn: [
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
                {
                    imgPath: '/static/new_img/2.png',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                },
            ],
            payCard: {
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                cost: 4500,
            },
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
                    <p className={styles.course__description}>
                        {courses[id]?.description}
                    </p>
                    {/*<div className={styles.course__btn}>*/}
                    {/*  <ColorButton text="Купить" color={BLUE} func={handleClick}/>*/}
                    {/*</div>*/}
                </section>
                <LessonDescription
                    id={id}
                    descriptionList={courses[id]?.descriptionList}
                    clip={CLIP_BLUE_REVERSE}
                />
                <LessonWillLearn list={courses[id]?.willLearn}/>
                <LessonPayCard requestFun={handleClick} {...courses[id]?.payCard}/>
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
