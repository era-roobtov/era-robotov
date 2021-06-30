import navPaths from "@/utils/paths";
import RainbowButton from "../Buttons/RainbowButton/RainbowButton";
import styles from "./Greeting.module.scss";

const Greeting = () => {
  return (
    <section className={styles.hello}>
      <h1 className={styles.greeting__head}>
        Школа программирования для детей
      </h1>
      <p className={styles.sub__text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
      <div className={styles.sub__img} />
      <div className={styles.sub__btn}>
        <RainbowButton path={navPaths.courses} text={"Выбрать курс"} />
      </div>
    </section>
  );
};

export default Greeting;
