import PropTypes from "prop-types";
import Item from '@/components/Advantages/Item';
import styles from "./LessonWillLeearn.module.scss"

const LessonWillLearn = ({list}) => {
  return (
      <section className={styles.lesson}>
        <h3 className={styles.lesson__header}>Чему научится наш слушатель</h3>
        <div className={styles.lesson__list}>
          {list.map((data, index) => <Item key={data.imgPath + 'key' + index} {...data}/>)}
        </div>
      </section>
  )
};

LessonWillLearn.propTypes = {
  list: PropTypes.array
}

export default LessonWillLearn;
