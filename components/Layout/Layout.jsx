import PropTypes from "prop-types";
import Header from "@/components/Header";
import "./Layout.module.scss";

const Layout = ({headerText, children}) => {
    return (
        <div className="container">
            <Header header={headerText}/>
            <section className="layout">
                {children}
            </section>
        </div>
    )
}

Layout.propTypes = {
    headerText: PropTypes.string,
}

export default Layout;
