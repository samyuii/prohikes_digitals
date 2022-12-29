import PropTypes from "prop-types";
import React, { useState, Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Funfact = ({ data }) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
    return (
        <div className="fanfact text-md-left text-center">
            <span className="title">
                <span className="counter">
                    <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                    >
                        <CountUp end={didViewCountUp ? data.number : 0} />
                    </VisibilitySensor>
                </span>
                +
            </span>
            <h6 className="sub-title">{data.title}</h6>
        </div>
    );
};

Funfact.propTypes = {
    data: PropTypes.object,
};

export default Funfact;
