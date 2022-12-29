import PropTypes from "prop-types";
import React, { Component } from "react";
const Testimonial = ({ data }) => {
    return (
        <div className="testimonial-slide-item swiper-slide">
            <span className="quote zmdi zmdi-quote"></span>
            <p className="testimonial-text mt-2 mb-5">{data.excerpt}</p>
            <div className="avater d-flex">
                <div className="avater-profile">
                    <img
                        src={process.env.PUBLIC_URL + data.authorThumb}
                        alt="avater"
                    />
                </div>
                <div className="avater-info">
                    <p>{data.name}</p>
                    <span>{data.designation}</span>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
