import Head from "next/head";
import React from "react";
import Course from "@/components/Content/Course";
import styles from "@/assets/courses.module.scss";
import Layout from "@/components/Layout/Layout";

const Courses = ({ courses }) => {
  return (
    <div className={styles.courses}>
      <Head>
        <title>Эра роботов. Курсы</title>
        <meta
          name="description"
          content="Курсы школы робототехники Эра роботов"
        />
      </Head>

      <Layout headerText="Курсы">
        <div className={styles.courses__list}>
          {courses.map((info) => (
            <Course key={info.id} info={info} />
          ))}
        </div>
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
          title: "Arduino",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 1,
          title: "Python",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 2,
          title: "Scratch",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 3,
          title: "WeDo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 4,
          title: "Lego Spike",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 5,
          title: "3D Печать",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 6,
          title: "Web",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
        {
          id: 7,
          title: "Special",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt accusantium animi tempore minima totam ea distinctio! Eaque quo corrupti, facilis culpa magnam, similique ut ab nam doloremque qui temporibus architecto molestias iure odio debitis consequuntur consequatur cumque? Labore, laborum.",
        },
      ],
    },
  };
}

export default Courses;
