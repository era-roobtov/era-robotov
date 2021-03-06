import Head from 'next/head';
import Layout from '@/components/Layout';
import Greeting from '@/components/Greeting';
import Advantages from '@/components/Advantages';
import {CLIP_ORANGE} from '@/utils/globalStyles';
import Footer from '@/components/Footer';
import InstaPosts from "@/components/InstaPosts";

const About = ({advantagesList, teachersList, subText, instaPosts}) => {

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
                <div className='blue__boxes_about'>
                    <div className='blue__boxes_about_1'>
                        <div className='blue__boxes_about_2'>
                            <Advantages
                                shiftCount={0}
                                columnCount={1}
                                {...advantagesList}
                                showBtn={false} clip={CLIP_ORANGE}
                            />
                        </div>
                    </div>
                </div>
                {/*<Advantages {...advantagesList} shiftCount={0} columnCount={1} showBtn={true} clip={CLIP_ORANGE}/>*/}
                {/*<Teachers {...teachersList} shiftClass={SHIFT_SINGLE} clip={CLIP_BLUE}/>*/}
                <Footer shiftCount={0}/>
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
                'Школа "ЭраРоботов" собрала единомышленников, профессиональных преподавателей в области робототехники и программирования. Наши сотрудники имеют высшее техническое образование и большой опыт работы с детьми разных возрастов, умеют доступно и интересно преподнести информацию. В процессе обучения мы используем новейшее оборудование, качественные наборы для сборки роботов и современное программное обеспечение.'
            ]
        },
    };
}

export default About;
