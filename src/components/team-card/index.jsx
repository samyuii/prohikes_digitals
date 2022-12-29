import PropTyps from "prop-types";
import React, { Component } from "react";

const TeamCard = ({ data }) => {
    return (
        <div className="team-card">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL + data.thumb} alt="img" />
            </div>
            <div className="content">
                <h3 className="title">{data.name}</h3>
                <span>{data.designation}</span>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
