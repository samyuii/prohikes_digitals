import React from "react";
import PropTypes from "prop-types";
// import SidebarCategories from "../../../components/sidebar/categories";
// import SidebarSearch from "../../../components/sidebar/search";
// import SidebarTag from "../../../components/sidebar/sidbar-tag";
// import SidebarArchive from "../../../components/sidebar/sidebar-archive";
// import SidebarPost from "../../../components/sidebar/sidebar-post";
// import SidebarTitle from "../../../components/sidebar/sidebar-title";
// import BlogData from "../data/blog.json";
import RemodelingdetailsWrap from "../../../components/Home-improvement-marketing";
// import Comment from "../../../components/comment";

const RemodelingdetailsContainer = ({ data }) => {
    return (
        <div className="blog-section section-py">
            <div className="container">
                <div className="Remodeling-details-content">
                    <RemodelingdetailsWrap data={data} />
                    <div className="blog-comments ">
                        {data.bodyBottom.map((single, key) => {
                            return (
                                <div
                                    className="desc"
                                    key={key}
                                    dangerouslySetInnerHTML={{
                                        __html: single,
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                <p>
                    How about marketing your products, events and services to
                    exactly the right audience at exactly the right time? This
                    is the key to sales sustainability and a customer-base that
                    grows each year.When you choose ProHikes as your remodeling
                    marketing partner, we handle all aspects of your online
                    marketing strategy— from advertising tracking to content
                    marketing to local SEO and more. Call us today to find out
                    how we can measurably improve your remodeling company’s web
                    marketing return on investment.
                    <p>
                        <br />
                        We are creating customized digital marketing solutions
                        for Companies, Agencies, Ecommerce and even Local
                        Businesses like home improvement contractors that
                        operate as single-location brick-and-mortar businesses
                        to large enterprises. Let us handle the technical side
                        of digital marketing so you can focus on providing
                        quality service.{" "}
                        <p>
                            SO, What are you waiting for? <br />
                            Get started with ProHikes today and see how it can
                            help take your home improvement business to the next
                            level!
                        </p>
                    </p>
                </p>
            </div>
        </div>
    );
};

RemodelingdetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default RemodelingdetailsContainer;
