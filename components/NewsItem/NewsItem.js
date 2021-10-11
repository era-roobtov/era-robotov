import PropTypes from "prop-types";
import {BLUE} from "@/utils/globalStyles";
import Link from "next/link";
import styles from './NewsItem.module.scss';

const NewsItem = ({imgPath, text, color, link}) => {
    const classes = `${styles.item} ${color === BLUE ? styles.blue : styles.orange}`

    return <article className={color === BLUE ? styles.blue : styles.orange}>
        <Link href={link}>
            <a className={styles.item} target="_blank">
                <img className={styles.item__img} src={imgPath} alt="Картинка"/>
                <p className={styles.item__text}>
                    {text}
                </p>
            </a>
        </Link>
    </article>
}

NewsItem.propTypes = {
    imgPath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default NewsItem;
