import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AccordionContainer from "../containers/accordion";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const FaqPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Faq" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Frequently Asked Questions"
                        excerpt=""
                        image="./images/faq/1.png"
                    />
                    <AccordionContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default FaqPage;
