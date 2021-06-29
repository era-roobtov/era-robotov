import PropTypes from "prop-types";
import Link from "next/link";

const RainbowButton = ({ path, text }) => {
  return (
    <Link href={path}>
      <a>{text}</a>
    </Link>
  );
};

RainbowButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default RainbowButton;
