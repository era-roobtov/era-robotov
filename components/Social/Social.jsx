import {
  facebookSvg, instagramSvg,
  telegramSvg,
  whatsAppSvg,
  youtubeSvg,
} from '@/utils/svgPaths';
import styles from './Social.module.scss';

const socialItems = [
  {
    name: 'facebook',
    img: facebookSvg,
  },
  {
    name: 'telegram',
    img: telegramSvg,
  },
  {
    name: 'YouTube',
    img: youtubeSvg,
  },
  {
    name: 'WhatsApp',
    img: whatsAppSvg,
  },
  {
    name: 'Instagram',
    img: instagramSvg,
  },
];

const Social = () => {
  return (
      <div className={styles.social}>
        {socialItems.map((socialItem) => (
            <img
                className={styles.social__item}
                src={socialItem.img}
                alt={socialItem.name}
                key={socialItem.name}
            />
        ))}
      </div>
  );
};

export default Social;
