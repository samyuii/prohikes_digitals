import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
// import SidebarTag from "../sidebar/sidbar-tag";
import BlogData from "../../data/blog.json";
import SocialIcon from "../social-icon";

const RemodelingdetailsWrap = ({ data }) => {
    return (
        <div className="Remodeling-details-wrap">
            <div className="Remodeling-details-thumb"></div>
            <h3 className="Remodeling-details-title">{data.title}</h3>
            {data.body.map((single, key) => {
                return (
                    <div
                        className="desc"
                        key={key}
                        dangerouslySetInnerHTML={{ __html: single }}
                    ></div>
                );
            })}
            <div className="social-tags d-sm-flex justify-content-between align-items-center"></div>
        </div>
    );
};

RemodelingdetailsWrap.propTypes = {
    data: PropTypes.object,
};

export default RemodelingdetailsWrap;
