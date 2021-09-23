import {instagramSvg, vkSVG} from '@/utils/svgPaths';
import styles from './Social.module.scss';
import Link from "next/link";

const socialItems = [
    {
        name: 'vk',
        img: vkSVG,
        link: 'https://vk.com/public207325056'
    },
    // {
    //   name: 'WhatsApp',
    //   img: whatsAppSvg,
    //   link: ':tel'
    // },
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
                <Link target='_blank' href={socialItem.link}>
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
