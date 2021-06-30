import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import Info from "@/components/Content/Info";
import Layout from "@/components/Layout/Layout";
import navPaths from "@/utils/paths";
import styles from "@/assets/index.module.scss";
import Greeting from "@/components/Greeting/Greeting";
import TextList from "@/components/TextList/TextList";

const headerTitle = "Эра роботов";

const Index = ({textList}) => {
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
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
        ],
      },
    },
  };
}

export default Index;
