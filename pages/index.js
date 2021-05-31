import Head from "next/head";
import Info from "@/components/Content/Info";
import Header from "@/components/Header"
import "../assets/index.scss";

const Index = () => {
  return (
    <div className="app">
      <Head>
        <title>Робомир</title>
        <meta name="description" content="Школа робототехники Эра роботов"/>
      </Head>
      <Header header='Эра роботов'/>
      <section className="index__content">
        <Info align="left"/>
        <Info align="right"/>
      </section>
    </div>
  );
};

export default Index;
