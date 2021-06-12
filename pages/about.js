import Head from "next/head";
import Header from "@/components/Header"
import Form from "@/components/Form";

const About = () => {
  return (
    <div className="about">
      <Head>
        <title>Робомир. О нас</title>
        <meta name="description" content="О школе робототехники" />
      </Head>
      <Header header='О нас'/>
      <section>
          О нас
          <Form/>
      </section>
    </div>
  );
};

export default About;
