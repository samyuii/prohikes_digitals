import React, { useEffect, useRef, Component } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Parallax from "parallax-js";

const HomeAboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="ABOUT US"
                                title="How 
                                <span class='text-primary'>
                                    Prohikes
                                </span>
                                <br className='d-none d-xl-block' />
                                Started"
                            />
                            <span className="date-meta">
                                Since 2020<span className="hr"></span>
                            </span>
                            <p className="mb-5">
                                While studying in university we started
                                educating ourselves about the fundamentals of
                                digital marketing and power of social media. We
                                always wanted to do something that can change
                                the dynamics of fresh businesses which are just
                                starting and businesses which could not reach
                                their true potential due to low visibility or
                                other problems.
                            </p>
                            <p className="high-light mb-8">
                                We tried running two Instagram accounts and
                                scaled them to a decent audience with more than
                                10k followers each. We knew that we had to scale
                                our business and achieve our goal of making sure
                                that we can provide help to businesses to reach
                                their true potential, along with focusing on
                                maintaining the relationship of clients with
                                their customers, which most agencies do not give
                                much focus to, and that&apos;s how we came up
                                with Prohikes.
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Learn more"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    className="journey"
                                    src={`${process.env.PUBLIC_URL}/images/about/1.png`}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutContainer;
