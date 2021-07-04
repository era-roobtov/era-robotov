import React from 'react';
import {useRouter} from 'next/router';
import Logo from '@/components/Course/Logo';
import Layout from '@/components/Layout';
import ColorButton from '@/components/Buttons/ColorButton';
import {BLUE, CLIP_BLUE} from '@/utils/globalStyles';
import styles from './index.module.scss';
import LessonDescription from '@/components/LessonDescription';

const Course = () => {
  const courses = {
    0: {
      title: 'Scratch',
      logo: ['/static/new_img/courses/scratch.png'],
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',

      descriptionList: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '],
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
    },
  };

  const router = useRouter();
  const {id} = router.query;

  const handleClick = () => {
    return console.log('kek');
  };
  console.log(courses[id]?.logo);
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
            <div className={styles.course__btn}>
              <ColorButton text="Купить" color={BLUE} func={handleClick}/>
            </div>
          </section>
          <LessonDescription descriptionList={courses[id]?.descriptionList} clip={CLIP_BLUE}/>
        </React.Fragment>}
      </Layout>
  );
};

export default Course;
