import React from "react";
import PropTypes from "prop-types";
import CalendlyArea from "../containers/global/Calendly";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import ServiceData from "../data/service.json";
// import dataEx from "../data/service.json";
import ServiceDetailsContainer from "../containers/service/service-details";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ServiceDetails = ({
    match: {
        params: { id },
    },
}) => {
    const serviceId = parseInt(id, 10);
    const data = ServiceData.filter((service) => service.id === serviceId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Service Details" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={data[0]?.title}
                        excerpt="<br />
                        "
                        image="/images/service/2.png"
                    />
                    <ServiceDetailsContainer data={data[0]} />
                    {/* <ServiceDetailsContainer data={dataEx[0]} /> */}
                    <CalendlyArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

ServiceDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ServiceDetails;
