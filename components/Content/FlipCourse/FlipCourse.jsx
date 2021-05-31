import PropTypes from "prop-types";
import React from "react";
import "./FlipCourse.scss";

const forward = 'flip';
const backward = 'backFlip';

const FlipCourse = ({ info, flipNumber }) => {
  const { id, title, description } = info;
  const [toggleClass, setToggleClass] = React.useState(forward);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    
    setTimeout(() => {
      setToggleClass(toggleClass === forward ? backward : forward);
    }, 3000/2)
  }, [flipNumber])

  if (id === flipNumber) {
    console.log(flipNumber);
  }

  const handleClick = () => {
    console.log("before > ", hover);
    setHover(!hover);
    console.log("after > ", hover);
  };

  return (
    <div
      onClick={handleClick}
      className={`flip-container ${hover ? "hover" : ""}`}
    >
      <div className={`flipper ${id === flipNumber ? toggleClass : ""}`}>
        <div className="front">frone{/* <!-- front content --> */}</div>
        <div className="back">back{/* <!-- back content --> */}</div>
      </div>
    </div>
  );
};

FlipCourse.propTypes = {
  info: PropTypes.object,
  flipNumber: PropTypes.number,
};

export default FlipCourse;
