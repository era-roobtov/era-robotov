import PropTypes from "prop-types";
import {BLUE} from "@/utils/globalStyles";
import Link from "next/link";
import styles from './NewsItem.module.scss';

const NewsItem = ({imgPath, text, color, link}) => {
  const classes = `${styles.item} ${color === BLUE ? styles.blue : styles.orange}`
  console.log(text.split('\n'));
  return <article className={classes}>
    <Link href={link}>
      <a target="_blank">
        <img className={styles.item__img} src={imgPath} alt="Картинка"/>
      </a>
    </Link>
    <p className={styles.item__text}>
      {
        text.split('\n').map((row) => {
          if (row.length) {
            return row;
          } else {
            return <br/>
          }
        })
      }
    </p>

  </article>
}

NewsItem.propTypes = {
  imgPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default NewsItem;
