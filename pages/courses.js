import {useState} from 'react';
import Head from 'next/head';
import React from 'react';
import Course from '@/components/Course';
import styles from '@/assets/courses.module.scss';
import Layout from '@/components/Layout/Layout';
import Footer from '@/components/Footer';
import {CLIP_BLUE, CLIP_BLUE_REVERSE} from '@/utils/colors';

const Courses = ({courses}) => {
  let reverseClip = true;

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

                return <Course
                    clip={reverseClip ? CLIP_BLUE_REVERSE : CLIP_BLUE}
                    index={index}
                    key={course.id} {...course}
                />;
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
          title: 'Scratch',
          logo: ['/static/new_img/courses/scratch.png'],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
        {
          id: 1,
          title: 'Arduino',
          logo: ['/static/new_img/courses/arduino.png'],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
        {
          id: 2,
          title: 'Lego WeDo',
          logo: ['/static/new_img/courses/lego.png'],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
        {
          id: 3,
          title: 'Scratch и Arduino',
          logo: [
            '/static/new_img/courses/scratch.png',
            '/static/new_img/courses/arduino.png',
          ],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
        {
          id: 4,
          title: 'Python',
          logo: ['/static/new_img/courses/python.png'],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
        {
          id: 5,
          title: 'Mindstorms',
          logo: ['/static/new_img/courses/mindstorms.png'],
          description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
        },
      ],
    },
  };
}

export default Courses;
