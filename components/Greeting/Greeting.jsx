import styles from "./Greeting.module.scss";

const Greeting = () => {
  return (
    <section className={styles.hello}>
      <div className={styles.greeting}>
        <h2 className={styles.greeting__head}>
          Школа программирования для детей
        </h2>
        <p className={styles.greeting__texet}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </div>
      <div className={styles.img}/>
    </section>
  );
};

export default Greeting;
