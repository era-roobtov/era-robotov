import Head from "next/head";
import Info from "../components/Content/Info";
import Nav from "../components/Nav"
import "../assets/index.scss";

const Index = () => {
  return (
    <div className="app">
      <Head>
        <title>Робомир</title>
        <meta name="description" content="Школа робототехники Эра роботов"/>
      </Head>
      <header className="index__header">
        <h1 className="header__heading">Эра роботов</h1>
        <Nav/>
      </header>
      <section className="index__content">
        <Info align="left"/>
        <Info align="right"/>
      </section>
    </div>
  );
};

export default Index;
