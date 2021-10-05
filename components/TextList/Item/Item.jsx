import Link from "next/link";
import styles from "./Item.module.scss";
import PropTypes from "prop-types";
import navPaths from "@/utils/paths";
import CustomLocalStorage from "@/utils/localStorage";

const Item = ({text, link}) => {

    const handleClick = (e) => {
        CustomLocalStorage.loadScroll(navPaths.home, window.scrollY);
    }

    return <Link href={link}>
        <a onClick={handleClick}>
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
