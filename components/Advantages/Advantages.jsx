import PropTypes from "prop-types";
import ColorButton from "@/components/Buttons/ColorButton/ColorButton";
import navPaths from "@/utils/paths";
import {BLUE, ORANGE} from "@/utils/colors";
import Item from "./Item/Item";
import styles from "./Advantages.module.scss";

const Advantages = ({ title, list }) => {
  return (
    <section className={`${styles.advantages} clip-blue`}>
      <h2 className={styles.advantages__header}>{title}</h2>
      <ul className={styles.advantages__list}>
        {list.map((item) => (
          <Item key={item.text} {...item} />
        ))}
      </ul>
      <div className={styles.advantages__btn}>
        <ColorButton
          path={navPaths.courses}
          text={"Выбрать курс"}
          color={ORANGE}
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
