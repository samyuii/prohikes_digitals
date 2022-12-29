import PropTyps from "prop-types";
import React, { Component } from "react";

const Team = ({ data }) => {
    return (
        <div className="new-team-members-list">
            <img src={process.env.PUBLIC_URL + data.thumb} alt="images" />
            <h3 className="title">{data.name}</h3>
            <span>{data.designation}</span>
        </div>
    );
};

Team.propTypes = {
    data: PropTyps.object,
};

export default Team;
