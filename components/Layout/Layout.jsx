import PropTypes from "prop-types";
import Header from "@/components/Header";
import "./Layout.scss";

const Layout = ({headerText, children}) => {
    return (
        <>
            <Header header={headerText}/>
            <section className="layout">
                {children}
            </section>
        </>
    )
}

Layout.propTypes = {
    headerText: PropTypes.string,
}

export default Layout;
