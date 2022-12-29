import React from "react";
import { InlineWidget } from "react-calendly";
import SectionTitle from "../../../components/section-title";

const CalendlyArea = () => {
    return (
        <div className="news-letter-section section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        <SectionTitle
                            classOption="title-section mb-10 text-center"
                            subTitle="Book a Strategy Call"
                            title="Schedule a 30-minute<br class='d-none d-xl-block' />
                            <span class='text-primary'>Free Meeting</span>"
                        />
                    </div>
                    <div className="App">
                        <InlineWidget url="https://calendly.com/prohikes/home-improvement" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendlyArea;
