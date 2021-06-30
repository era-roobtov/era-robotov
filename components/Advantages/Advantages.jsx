import PropTypes from "prop-types";
import ColorButton from "@/components/Buttons/ColorButton/ColorButton";
import Item from "./Item/Item";
import styles from "./Advantages.module.scss";
import navPaths from "@/utils/paths";

const Advantages = ({ title, list }) => {
  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantages__header}>{title}</h2>
      <ul className={styles.advantages__list}>
        {list.map((item) => (
          <Item {...item} />
        ))}
      </ul>
      <div className={styles.advantages__btn}>
        <ColorButton
          path={navPaths.courses}
          text={"Записаться на курс"}
          reverse={false}
        />
      </div>
    </section>
  );
};

Advantages.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default Advantages;
