import styles from './Information.module.scss';
import ColorButton from "@/components/Buttons/ColorButton";
import {WHITE} from "@/utils/globalStyles";
import PropTypes from "prop-types";

const Information = ({cost, requestFun, description, align, additionalInfo}) => {
    return (
        <div className={align}>
            <div className={styles.information}>
                <h4 className={styles.information__header}>Стоимость курса</h4>
                <p className={styles.information__description}>{description}</p>
                <p className={styles.information__cost}>{cost} р/час</p>
                <p className={styles.information__description_additional}>{additionalInfo}</p>
            </div>
            <div className={styles.btns}>
                <ColorButton text="Забронировать" color={WHITE} func={requestFun}/>
            </div>
        </div>
    )
};

Information.propTypes = {
    description: PropTypes.string,
    cost: PropTypes.number,
    requestFun: PropTypes.func,
    align: PropTypes.string,
    additionalInfo: PropTypes.string
};

export default Information;
