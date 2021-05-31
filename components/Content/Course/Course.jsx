import PropTypes from "prop-types";
import './Course.scss';

const Course = ({ info }) => {
  const { title, description } = info;

  return (
    <div className="course">
      <h2 className="course__title">{title}</h2>
      <p className="course__description">{description}</p>
    </div>
  );
};

Course.propTypes = {
  info: PropTypes.object,
};

export default Course;
