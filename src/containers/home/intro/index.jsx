import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    return (
        <div className="section position-relative">
            <div className="hero-shape1">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`}
                    alt="shape"
                />
            </div>
            <div className="hero-shape2"></div>
            <Intro data={HomeData[0].slider[0]} />
        </div>
    );
};

export default IntroContainer;
