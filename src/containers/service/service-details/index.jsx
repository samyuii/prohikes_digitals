import React from "react";
import PropTypes from "prop-types";
import ServiceDetails from "../../../components/service-details";
import ServiceCate from "../../../components/sidebar/service-cate";
import ServiceData from "../../../data/service.json";

const ServiceDetailsContainer = ({ data }) => {
    return (
        <div className="single-service section-py">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ServiceDetails data={data} />
                    </div>
                    <div className="col-xl-3 col-lg-4 offset-xl-1">
                        <div className="sidbar-widget float-start w-100">
                            <ServiceCate data={ServiceData} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-13">
                    {data.bodyBottom.map((single, key) => {
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

ServiceDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetailsContainer;
