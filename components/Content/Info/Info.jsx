import PropTypes from "prop-types";
import Image from "next/image";
import "./Info.module.scss";

const Info = ({ align }) => {
  return (
    <div className={`Info ${align}`}>
      <div className="Info__image-container">
        <Image
          className="Info__image"
          src="/static/imgs/spike_hello.png"
          alt="Спайк припетствие"
          layout="fill"
        />
      </div>
      <div className="Info__text">
        <h2 className="Info__text-top">Заголовок</h2>
        <p className="Info__text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ipsum, sequi porro ratione laudantium deserunt quos? Corporis, nesciunt vero omnis quo aspernatur quis ullam ex, natus inventore aperiam doloribus corrupti error, unde impedit soluta asperiores numquam mollitia laboriosam sit cupiditate repellat nam sed. Assumenda sint voluptate vel cupiditate vero facilis!
        </p>
        <a className="Info__text-link" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
};

Info.propTypes = {
  align: PropTypes.string,
};

export default Info;
