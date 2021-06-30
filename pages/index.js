import Head from "next/head";
// import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import styles from "@/assets/index.module.scss";
import Greeting from "@/components/Greeting/Greeting";
import TextList from "@/components/TextList/TextList";
import Advantages from "@/components/Advantages/Advantages";
import Footer from "@/components/Footer/Footer";

const headerTitle = "Эра роботов";

const Index = ({ textList, advantagesList }) => {
  return (
    <div className="app">
      <Head>
        <title>Эра роботов</title>
        <meta name="description" content="Школа робототехники Эра роботов" />
      </Head>
      <Layout headerText={headerTitle}>
        <Greeting />
        <div className={styles.robots} />
        <TextList {...textList} />
        <Advantages {...advantagesList} />
        <Footer />
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      textList: {
        title: "Чему научится наш слушатель",
        list: [
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 2",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 3",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 4",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 5",
        ],
      },
      advantagesList: {
        title: "Наши преимущества",
        list: [
          {
            img: "/static/new_img/advantages/1.png",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 1",
          },
          {
            img: "/static/new_img/advantages/1.png",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.2",
          },
          {
            img: "/static/new_img/advantages/1.png",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.3",
          },
          {
            img: "/static/new_img/advantages/1.png",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.4",
          },
          {
            img: "/static/new_img/advantages/1.png",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.5",
          },
        ],
      },
    },
  };
}

export default Index;
