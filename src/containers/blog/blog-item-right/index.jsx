import React from "react";
import PropTypes from "prop-types";
import BlogGrid from "../../../components/blog";
import SidebarCategories from "../../../components/sidebar/categories";
import SidebarSearch from "../../../components/sidebar/search";
import SidebarTag from "../../../components/sidebar/sidbar-tag";
import SidebarArchive from "../../../components/sidebar/sidebar-archive";
import SidebarPost from "../../../components/sidebar/sidebar-post";
import SidebarTitle from "../../../components/sidebar/sidebar-title";
import BlogData from "../../../data/blog.json";

const BlogItemRightContainer = ({ data }) => {
    return (
        <div className="blog-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-8 col-lg-8 mb-7">
                        <div className="row mb-n7 row-cols-1 row-cols-sm-2">
                            {data &&
                                data.slice(3, 11).map((single, key) => {
                                    return (
                                        <div key={key} className="col mb-7">
                                            <BlogGrid
                                                classOption="p-0"
                                                key={key}
                                                data={single}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 mb-7  offset-xl-1">
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

BlogItemRightContainer.propTypes = {
    data: PropTypes.array,
};

export default BlogItemRightContainer;
