import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import CalendlyArea from "../containers/global/Calendly";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Service" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Services"
                        excerpt="We offer qualified online solutions to people, companies, developers, and retailers. Our services and solutions have been created with performance and user-friendliness in mind to enable anyone expand their business and utilise the Web, from complete beginners to professionals.<br />
                        "
                        image="./images/service/2.png"
                    />
                    <ServiceListContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <TeamContainer classOption="null" />
                    <BrandContainer />
                    <CalendlyArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;
