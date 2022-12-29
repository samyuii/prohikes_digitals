import PropTypes from "prop-types";
import React, { Component } from "react";

const SocialIcon = ({ path, icon, classOption }) => {
    return (
        <a
            className={`${classOption}`}
            href={process.env.PUBLIC_URL + path}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={icon}></i>
        </a>
    );
};

SocialIcon.propTypes = {
    path: PropTypes.string,
    icon: PropTypes.string,
    classOption: PropTypes.string,
};
SocialIcon.defaultProps = {
    classOption: "footer-social-link",
};

export default SocialIcon;
