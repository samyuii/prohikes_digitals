import React from "react";
import PropTypes from "prop-types";

const SidebarTitle = ({ title }) => {
    return (
        <React.Fragment>
            <h3 className="widget-title">{title}</h3>
        </React.Fragment>
    );
};

SidebarTitle.propTypes = {
    title: PropTypes.string,
};

export default SidebarTitle;
