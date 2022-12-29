import React from "react";
import PropTypes from "prop-types";
import SidebarCategories from "../../../components/sidebar/categories";
import SidebarSearch from "../../../components/sidebar/search";
import SidebarTag from "../../../components/sidebar/sidbar-tag";
import SidebarArchive from "../../../components/sidebar/sidebar-archive";
import SidebarPost from "../../../components/sidebar/sidebar-post";
import SidebarTitle from "../../../components/sidebar/sidebar-title";
import BlogData from "../../../data/blog.json";
import BlogDetailsWrap from "../../../components/blog-details";
import Comment from "../../../components/comment";

const BlogDetailsContainer = ({ data }) => {
    return (
        <div className="blog-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-8 col-lg-8 mb-7">
                        <div className="blog-details-content">
                            <BlogDetailsWrap data={data} />
                            <div className="blog-comments ">
                                <h3 className="blog-comment-title">
                                    Leave a Reply or Comment
                                </h3>
                                <p>
                                    Top rated construction packages we pleasure
                                    rationally encounter consequences
                                    interesting who loves or pursue or desires
                                    to obtain These cases are perfectly simple
                                    and easy
                                </p>
                            </div>

                            <Comment
                                url=""
                                id={BlogData.id}
                                title={BlogData.title}
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 mb-7 offset-xl-1">
                        <div className="widget-wrapper widget-wrapper-nl">
                            <div className="sidebar-widget">
                                <SidebarTitle title="Search" />
                                <SidebarSearch />
                            </div>

                            <div className="sidebar-widget">
                                <SidebarTitle title="Categories" />
                                <SidebarCategories data={BlogData} />
                            </div>
                            <div className="sidebar-widget">
                                <SidebarTitle title="popular post" />
                                <SidebarPost data={BlogData} />
                            </div>

                            <div className="sidebar-widget">
                                <SidebarTitle title="Archive" />
                                <SidebarArchive data={BlogData} />
                            </div>

                            <div className="sidebar-widget">
                                <SidebarTitle title="Tags" />
                                <SidebarTag data={BlogData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default BlogDetailsContainer;
