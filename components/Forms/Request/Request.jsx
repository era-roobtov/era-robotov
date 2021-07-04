import {useState} from 'react';
import PropTypes from 'prop-types';
import URL from '@/utils/urls';
import styles from './Request.module.scss';

const Request = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    tel: '',
    courses: '',
  });

  const handleSumbit = (e) => {
    const {name, email, tel, courses} = data;
    console.log('s');
    e.preventDefault();

    const json = {
      name,
      email,
      telephoneNumber: tel,
      courses,
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
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    setData({[name]: val});
  };

  return (
      <form>
        <input type="text" name="name" value={data.name} onChange={handleChange}/>
        {data.name}
      </form>
  );
};

export default Request;
