import PropTypes from "prop-types";
import styles from './InstaPosts.module.scss';

const InstaPosts = ({posts}) => {
    const createMarkup = () => {
        return posts.map((post) => {
            return <div dangerouslySetInnerHTML={{__html: post}}/>
        })
    }

    return (
        <div className={styles.posts}>
            {createMarkup()}
        </div>
    )
};

InstaPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InstaPosts;
