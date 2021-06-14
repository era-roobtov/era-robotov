import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import Info from "@/components/Content/Info";
import Layout from "@/components/Layout/Layout";
import navPaths from "@/utils/paths";
import styles from "@/assets/index.module.scss";
import Greeting from "@/components/Greeting/Greeting";

const headerTitle = "Эра роботов";

const Index = () => {
  return (
    <div className="app">
      <Head>
        <title>Эра роботов</title>
        <meta name="description" content="Школа робототехники Эра роботов" />
      </Head>
      <Layout headerText={headerTitle}>
        <Greeting />
      </Layout>
    </div>
  );
};

export default Index;
