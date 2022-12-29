import React from "react";
import PropTypes from "prop-types";

const ServiceDetails = ({ data }) => {
    return (
        <div className="service-wrap">
            <div className="title-section">
                <h3 className="title pb-2">{data.title}</h3>
                <div className="service-content-wrap">
                    {data.body.map((single, key) => {
                        return (
                            <div
                                className="desc"
                                key={key}
                                dangerouslySetInnerHTML={{ __html: single }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetails;
