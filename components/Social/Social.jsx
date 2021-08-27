import {
  facebookSvg, instagramSvg,
  telegramSvg,
  whatsAppSvg,
  youtubeSvg,
} from '@/utils/svgPaths';
import styles from './Social.module.scss';
import Link from "next/link";

const socialItems = [
  {
    name: 'facebook',
    img: facebookSvg,
    link: ''
  },
  {
    name: 'telegram',
    img: telegramSvg,
    link: ''
  },
  {
    name: 'YouTube',
    img: youtubeSvg,
    link: ''
  },
  {
    name: 'WhatsApp',
    img: whatsAppSvg,
    link: ''
  },
  {
    name: 'Instagram',
    img: instagramSvg,
    link: 'https://instagram.com/era.robotov?utm_medium=copy_link'
  },
];

const Social = () => {
  return (
      <div className={styles.social}>
        {socialItems.map((socialItem) => (
            <Link target='_blanks' href={socialItem.link}>
              <a>
                <img
                    className={styles.social__item}
                    src={socialItem.img}
                    alt={socialItem.name}
                    key={socialItem.name}
                />
              </a>
            </Link>
        ))}
      </div>
  );
};

export default Social;
