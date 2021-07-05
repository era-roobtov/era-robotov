import PropTypes from 'prop-types';
import ColorButton from '@/components/Buttons/ColorButton';
import {BLUE, WHITE} from '@/utils/globalStyles';
import styles from './LessonPayCard.module.scss';

const LessonPayCard = ({description, cost, requestFun}) => {

  const handleBuy = () => {
    return console.log('buy');
  };

  return (
      <section className={styles.payCard}>
        <div className={styles.payCard__info}>
          <h4 className={styles.info__header}>Стоимость курса</h4>
          <p className={styles.info__description}>{description}</p>
          <p className={styles.info__cost}>{cost} р.</p>
        </div>
        <div className={styles.payCard__btns}>
          <ColorButton text="Забронировать" color={WHITE} func={requestFun}/>
          <ColorButton text="Купить" color={BLUE} func={handleBuy}/>
        </div>
      </section>
  );
};

LessonPayCard.propTypes = {
  description: PropTypes.string,
  cost: PropTypes.number,
  requestFun: PropTypes.func
};

export default LessonPayCard;
