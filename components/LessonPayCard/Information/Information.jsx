import styles from './Information.module.scss';
import ColorButton from "@/components/Buttons/ColorButton";
import {WHITE} from "@/utils/globalStyles";
import PropTypes from "prop-types";

const Information = ({cost, requestFun, align, additionalInfo, subscription}) => {
    return (
        <div className={align}>
            <div className={styles.information}>
                <p className={styles.information__cost}>{cost} {subscription ? 'р' : 'р / 1 час'}</p>
                <p className={styles.information__description_additional}>{additionalInfo}</p>
            </div>
            <div className={styles.btns}>
                <ColorButton text="Забронировать" color={WHITE} func={requestFun}/>
            </div>
        </div>
    )
};

Information.propTypes = {
    cost: PropTypes.number,
    requestFun: PropTypes.func,
    align: PropTypes.string,
    additionalInfo: PropTypes.string,
    subscription: PropTypes.bool
};

export default Information;
