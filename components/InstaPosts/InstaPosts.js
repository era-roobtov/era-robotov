import PropTypes from "prop-types";
import styles from './InstaPosts.module.scss';

const InstaPosts = ({posts}) => {
    const createMarkup = () => {
        return posts.map((post) => {
            return <div dangerouslySetInnerHTML={{__html: post}}/>
        })
    }

    return (
        <section>
            <h3 className={styles.header}>Наши новости</h3>
            <div className={styles.posts}>
                {createMarkup()}
            </div>
        </section>
    )
};

InstaPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InstaPosts;
