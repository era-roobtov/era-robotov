import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const BoxesWrapper = ({classes}) => {
  const [wrappers, setWrappers] = useState([]);

  const Wrapper = ({children}) => {
    return (
        <div>{}</div>
    )
  }

  useEffect(() => {
    let tempArr = [];
    let tempElem = <div></div>
    let prevClass;

    classes.forEach((classItem, index) => {
      if(index !== 0 && index % 2 === 0) {
        tempArr.push(tempElem);
      };

      tempElem
    })
  }, [classes]);

  return (
      <div>

      </div>
  );
};

BoxesWrapper.propTypes = {
  classes: PropTypes.array,
};


export default BoxesWrapper;
