import React from "react";
import PropTypes from "prop-types";
import PageBannerImage from "../../../components/page-banner-image";
import PageTitle from "../../../components/page-title";

const PageBanner = ({ title, excerpt, image }) => {
    return (
        <div className="banner-section position-relative">
            <img
                className="banner-shape"
                src={process.env.PUBLIC_URL + "/images/banner/shape1.png"}
                alt="shape"
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <PageTitle title={title} excerpt={excerpt} />
                    </div>

                    <div className="col-md-6 mt-7 mt-md-0">
                        <PageBannerImage image={image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

PageBanner.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
};

export default PageBanner;
