import PropTypes from "prop-types";
import React, { Component } from "react";
const PageTitle = ({ title, excerpt }) => {
    return (
        <div className="banner-content banner-padding">
            <h3 className="title">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
};

export default PageTitle;
