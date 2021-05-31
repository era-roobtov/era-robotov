import Head from "next/head";
import Header from "@/components/Header"

const Contact = () => {
    return (
        <div>
            <Head>
            <title>Робомир. Контакты</title>
        <meta name="description" content="Контакты школы робототехники Эра роботов" />
            </Head>
            <Header header="Наши контакты"/>
            <section>
                Наши контакты
            </section>
        </div>
    )
}

export default Contact;
