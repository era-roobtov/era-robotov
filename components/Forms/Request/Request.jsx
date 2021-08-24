import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import URL from '@/utils/urls';
import ColorButton from '@/components/Buttons/ColorButton';
import {ORANGE} from '@/utils/globalStyles';
import {closeSvg} from '@/utils/svgPaths';
import styles from './Request.module.scss';

const Request = ({title, isOpen, fun}) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    tel: '',
    sex: '',
    age: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.getElementById('RequestForm').
          scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {
        document.querySelector('html').
            setAttribute('style', 'overflow: hidden');
      }, 800);
      document.addEventListener('keydown', closeForm, false);
    } else {
      document.querySelector('html').removeAttribute('style');
      document.removeEventListener('keydown', closeForm, false);
    }
  }, [isOpen]);

  const handleSumbit = (e) => {
    const {name, email, tel, age, sex} = data;
    const NumberAge = Number(age);
    e.preventDefault();
    
    if (isNaN(NumberAge)) {
      alert("Введите возраст не используя буквы!");
    } else {
      const json = {
        name,
        email,
        telephoneNumber: tel,
        course: {title},
        sex,
        age: NumberAge,
        'aos': '',
      };

      fetch(URL.mailRequest, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'origin': URL.home,
        },
        body: JSON.stringify(json),
      }).then((r) => console.log(r)).catch((e) => console.error(e));
    }

  };

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    setData({...data, [name]: val});
  };

  const closeForm = (event) => {
    if (event.keyCode === 27) {
      fun();
    }
  };

  return (
      <div
          id="RequestForm"
          onKeyDown={closeForm}
          className={`${styles.wrapper} 
          ${isOpen ? styles.wrapper_open : styles.wrapper_close}`}
      >
        <img onClick={fun} className={styles.close} src={closeSvg} alt=""/>
        <div className={styles.request}>
          <h5 className={styles.request__header}>Забронировать курс {title}</h5>
          <p className={styles.request__text}>
            Укажите персональные данные вашего ребенка
          </p>
          <form className={styles.request__form}>
            <div className={styles.form__input}>
              <label htmlFor={name}>
                ФИО
              </label>
              <input
                  id="name" type="text" name="name" value={data.name}
                  onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="email">
                Email
              </label>
              <input
                  id="email" type="text" name="email" value={data.email}
                  onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="tel">
                Телефон
              </label>
              <input
                  id="tel" type="text" name="tel" value={data.tel}
                  onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="sex">
                Пол
              </label>
              <input
                  id="sex" type="text" name="sex" value={data.sex}
                  onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="age">
                Возраст
              </label>
              <input
                  id="age" type="text" name="age" value={data.age}
                  onChange={handleChange}
              />
            </div>
            <ColorButton func={handleSumbit} color={ORANGE}
                         text="Забронировать"/>
          </form>
        </div>
      </div>
  );
};

Request.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  fun: PropTypes.func,
};

export default Request;
