import PropTypes from "prop-types";
// import Image from "next/image";
import styles from "./Info.module.scss";

const Info = ({ align }) => {
  const alStyle = align === 'left' ? styles.left : styles.right; 

  return (
    <div className={`${styles.Info} ${alStyle}`}>
      <div className={styles.Info__image_container}>
        {/* <Image
          className={styles.Info__image}
          src="/static/imgs/spike_hello.png"
          alt="Спайк припетствие"
          layout="fill"
        /> */}
      </div>
      <div className={styles.Info__text}>
        <h2 className={styles.Info__text_top}>Заголовок</h2>
        <p className={styles.Info__text_center}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ipsum, sequi porro ratione laudantium deserunt quos? Corporis, nesciunt vero omnis quo aspernatur quis ullam ex, natus inventore aperiam doloribus corrupti error, unde impedit soluta asperiores numquam mollitia laboriosam sit cupiditate repellat nam sed. Assumenda sint voluptate vel cupiditate vero facilis!
        </p>
        <a className={styles.Info__text_link} href="#">
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
