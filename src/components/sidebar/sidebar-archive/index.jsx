import React from "react";
import PropTypes from "prop-types";
import { flatDeep, slugify, containsObject } from "../../../utils";
import { Link } from "react-router-dom";

const SidebarArchive = ({ data }) => {
    const postDate = data.map((item) => {
        return item.date;
    });
    let singleDateArray = flatDeep(postDate);
    let date = [];
    singleDateArray.forEach((cat) => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1,
        };
        const objIndex = containsObject(obj, date);
        if (objIndex !== -1) {
            const prevCount = date[objIndex].count;
            date[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            date.push(obj);
        }
    });
    return (
        <div className="widget-list">
            <ul className="list-group list-group-flush">
                {date.map((single, i) => {
                    return (
                        <li key={i} className="list-group-item">
                            <Link
                                className="d-flex justify-content-between align-items-center"
                                to={
                                    process.env.PUBLIC_URL +
                                    `/date/${single.slug}`
                                }
                            >
                                {single.title} <span>{single.count}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

SidebarArchive.propTypes = {
    data: PropTypes.array,
};

export default SidebarArchive;
