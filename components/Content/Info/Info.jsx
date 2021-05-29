import PropTypes from 'prop-types'
import Image from "next/image";
import "./Info.scss";

const Info = ({align}) => {
   
  return (
    <div className={`Info ${align}`}>
      <Image
        className="Info__image"
        src="/static/imgs/spike_hello.png"
        alt="Спайк припетствие"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="Info__text">
          <h2 className="Info__text-top">Заголовок</h2>
          <p className="Info__text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, harum delectus. Labore est voluptates corporis pariatur hic quidem voluptas illum culpa. Ducimus dolores vero esse quo totam dolor doloremque perspiciatis.</p>
      </div>
    </div>
  );
};

Info.propTypes = {
    align: PropTypes.string
}

export default Info;