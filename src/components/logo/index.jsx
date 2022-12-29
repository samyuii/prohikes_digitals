import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component } from "react";

const Logo = ({ image, classOption }) => {
    return (
        <Link className={`${classOption}`} to={process.env.PUBLIC_URL + "/"}>
            <img
                className="logo-main"
                src={process.env.PUBLIC_URL + image}
                alt="Logo"
            />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

Logo.defaultProps = {
    classOption: "text-center",
};

export default Logo;
