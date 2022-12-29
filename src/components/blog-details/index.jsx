import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
import SidebarTag from "../sidebar/sidbar-tag";
import BlogData from "../../data/blog.json";
import SocialIcon from "../social-icon";

const BlogDetailsWrap = ({ data }) => {
    return (
        <div className="blog-details-wrap">
            <div className="blog-details-thumb">
                <img
                    src={`${process.env.PUBLIC_URL}/${data.media.largeImage}`}
                    alt="img"
                />
            </div>
            <p className="blog-details-meta">
                <Link
                    className="author"
                    to={
                        process.env.PUBLIC_URL +
                        `/author/${slugify(data.author)}`
                    }
                >
                    {data.author}
                </Link>
                <span className="separator">-</span>
                <Link
                    className="date"
                    to={process.env.PUBLIC_URL + `/date/${slugify(data.date)}`}
                >
                    {data.date}
                </Link>
            </p>
            <h3 className="blog-details-title">{data.title}</h3>
            {data.body.map((single, key) => {
                return (
                    <div
                        className="desc"
                        key={key}
                        dangerouslySetInnerHTML={{ __html: single }}
                    ></div>
                );
            })}
            <div className="social-tags d-sm-flex justify-content-between align-items-center">
                <p className="mb-4 mb-sm-0 d-flex align-items-center">
                    <i className="fa fa-tags"></i>
                    <SidebarTag data={BlogData} />
                </p>

                <ul className="social-links d-flex">
                    <li className="share">
                        <span>Share</span>
                    </li>
                    <li>
                        <SocialIcon
                            classOption="null"
                            path="https://www.facebook.com/"
                            icon="icofont-facebook"
                        />
                    </li>
                    <li>
                        <SocialIcon
                            classOption="null"
                            path="https://www.twitter.com/"
                            icon="icofont-twitter"
                        />
                    </li>
                    <li>
                        <SocialIcon
                            classOption="null"
                            path="https://www.instagram.com/"
                            icon="icofont-instagram"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

BlogDetailsWrap.propTypes = {
    data: PropTypes.object,
};

export default BlogDetailsWrap;
