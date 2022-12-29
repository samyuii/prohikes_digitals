import React from "react";
import PropTypes from "prop-types";
import CalendlyArea from "../containers/global/Calendly";
import PageBannercopy from "../containers/global/page-banner- Copy";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import RemodelingdetailsContainer from "../containers/blog/Home-improvement-marketing";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const RemodelingdetailsPage = ({
    match: {
        params: { id },
    },
}) => {
    const blogId = parseInt(id, 10);
    const data = BlogData.filter((blogItem) => blogItem.id === blogId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Remodeling Maketing" />
                <div className="wrapper">
                    <Header />
                    <PageBannercopy
                        title="Market your Home Improvement Business With ProHikes"
                        image="/images/blog/banner.png"
                    />
                    <RemodelingdetailsContainer data={data[0]} />
                    <CalendlyArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

RemodelingdetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default RemodelingdetailsPage;
