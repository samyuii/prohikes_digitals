import React from "react";
import SectionTitle from "../../../components/section-title";
import ServiceBox from "../../../components/service-box";
import ServiceData from "../../../data/service.json";

const ServiceListContainer = () => {
    return (
        <div className="service-section section-pt position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 mx-auto">
                        <SectionTitle
                            classOption="title-section mb-10 pb-10 text-center"
                            subTitle="services"
                            title="Check <span class='text-primary'>our</span> Services"
                            excerptClassOption="null"
                            excerpt="that can Scale and Enhance Your Business"
                        />
                    </div>
                </div>

                <div className="row mb-n7 align-items-center">
                    <div className="col-md-6 col-xl-4 mb-7">
                        <div className="service-media-wrapper media-spacing-left">
                            {ServiceData &&
                                ServiceData.slice(0, 3).map((single, key) => {
                                    return (
                                        <ServiceBox data={single} key={key} />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="col-xl-4 mb-7 order-md-1 order-xl-0">
                        <div className="service-media-img text-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/service/media.png`}
                                alt="images_not_found"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mb-7">
                        <div className="service-media-wrapper media-spacing-right">
                            {ServiceData &&
                                ServiceData.slice(3, 6).map((single, key) => {
                                    return (
                                        <ServiceBox data={single} key={key} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceListContainer;
