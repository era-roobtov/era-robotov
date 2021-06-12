import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import Info from "@/components/Content/Info";
import Layout from "@/components/Layout/Layout";
import navPaths from "@/utils/paths";
import styles from "@/assets/index.module.scss";

const headerTitle = "Эра роботов";

const Index = () => {
  return (
    <div className="app">
      <Head>
        <title>Эра роботов</title>
        <meta name="description" content="Школа робототехники Эра роботов" />
        <meta name="yandex-verification" content="e8ea578e74248b77" />
      </Head>
      <Layout headerText={headerTitle}>
        <div className={styles.index__school}>
          <h2 className={styles.school__header}>Школа программирования для детей</h2>
          <p className={styles.school__add}>
            Учим создавать игры, конструировать и программировать роботов.
          </p>
          <ul className={styles.school__list}>
            <li>
              <p className={styles.list__text}>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <p className={styles.list__text}>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <p className={styles.list__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
          <Link href={navPaths.courses}>
            <a className={styles.school__choose}>Выбрать курс</a>
          </Link>
          <div className={styles.school__image_container}>
            {/* <Image
              className={styles.school__image}
              src="/static/imgs/girl.png"
              alt="Картинка школы"
              layout="fill"
            /> */}
          </div>
        </div>
        <div className={styles.index__content}>
          <Info align="left" />
          <Info align="right" />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
