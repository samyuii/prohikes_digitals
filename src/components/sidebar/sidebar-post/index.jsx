import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SidebarPost = ({ data }) => {
    return (
        <div className="widget-post-wrap">
            {data.slice(0, 3).map((single, i) => {
                return (
                    <div key={i} className="widget-post-list">
                        <Link
                            to={
                                process.env.PUBLIC_URL +
                                `/blog-details/${single.id}`
                            }
                            className="post-thumb"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/${single.media.rcImage}`}
                                alt="img"
                            />
                        </Link>
                        <div className="widget-post-content">
                            <h3 className="widget-sub-title">
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        `/blog-details/${single.id}`
                                    }
                                >
                                    {single.title}
                                </Link>
                            </h3>
                            <p className="post-meta">{single.date}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

SidebarPost.propTypes = {
    data: PropTypes.array,
};

export default SidebarPost;
