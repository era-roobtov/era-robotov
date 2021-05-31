import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import Course from "@/components/Content/Course";
import "@/assets/courses.scss";
import FlipCourse from "@/components/Content/FlipCourse/FlipCourse";

const animationDur = 3000;

const Courses = ({ courses }) => {
  const [curFilp, setCurFlip] = React.useState(0);

  React.useEffect(() => {
    if (curFilp === courses.length) {
      setCurFlip(0);
    }

    setTimeout(() => {
      setCurFlip(curFilp + 1);
    }, 3000);
  }, [curFilp]);

  return (
    <div className="courses">
      <Head>
        <title>Робомир. Курсы</title>
        <meta
          name="description"
          content="Курсы школы робототехники Эра роботов"
        />
      </Head>
      <Header header="Курсы" />
      <section className="courses__list">
        {/* {
            courses.map((info) => <Course key={info.id} info={info}/>)
        } */}

        {courses.map((info) => (
          <FlipCourse flipNumber={curFilp} key={info.id} info={info} />
        ))}
      </section>
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
