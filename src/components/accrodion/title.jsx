import React, { useContext, Component } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./context";

const AccordionTitle = ({ children, id }) => {
    const { toggleActive, activeId, setIsInit } = useContext(AccordionContext);

    const clickHandler = () => {
        if (!toggleActive || !id || !setIsInit) return;
        setIsInit(false);
        toggleActive(id);
    };
    const isActive = id === activeId ? true : false;

    return (
        <div
            aria-hidden="true"
            className={`accordion-header ${isActive ? "active" : ""}`}
            type="button"
            onClick={clickHandler}
        >
            <span className="accordion-title">{children}</span>
        </div>
    );
};

AccordionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AccordionTitle;
