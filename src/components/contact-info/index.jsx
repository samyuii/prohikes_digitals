import React from "react";
import PropTypes from "prop-types";

const ContactInfo = ({ data }) => {
    return (
        <div className={data.classOption}>
            <h4 className="title">{data.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: data.info }}></p>
        </div>
    );
};

ContactInfo.propTypes = {
    data: PropTypes.object,
};

export default ContactInfo;
