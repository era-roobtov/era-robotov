import Link from "next/link";
import styles from "./Item.module.scss";
import PropTypes from "prop-types";

const Item = ({text, link}) => {

    return <Link href={link}>
        <a classaName={styles.link}>
            <li className={styles.item}>
                {text}
            </li>
        </a>
    </Link>

};

Item.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Item;
