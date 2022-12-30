import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import CalendlyArea from "../containers/global/Calendly";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Contact" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Contact us"
                        excerpt="Our digital marketing team is always ready to help. Give us a call, send us an email, or fill out the form below."
                        image="./images/contact/1.png"
                    />
                    <br />
                    <br />
                    <CalendlyArea />
                    <ContactContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
