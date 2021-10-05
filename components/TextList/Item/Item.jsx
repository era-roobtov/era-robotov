import Link from "next/link";
import styles from "./Item.module.scss";
import PropTypes from "prop-types";
import {useContext} from "react";
import {SCROLL_NODE, ScrollContext} from "../../../Context/ScrollContext";
import navPaths from "@/utils/paths";

const Item = ({text, link}) => {
    const {setScroll} = useContext(ScrollContext);

    const handleClick = (e) => {
        setScroll({
            isScroll: navPaths.home,
            cords: window.scrollY
        })
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
