import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="ProHikes – Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Team"
                        excerpt="The wide skillset in our team encompasses website designing, digital marketing, social media management, paid ads, affiliation marketing and much more!!!!!"
                        image="./images/team/5.png"
                    />
                    <TeampPageContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
