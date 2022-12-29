import PropTypes from "prop-types";

const SectionTitleTwo = ({
    subTitle,
    title,
    excerpt,
    classOption,
    excerptClassOption,
}) => {
    return (
        <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4">
                <div className={`title-section ${classOption}`}>
                    <span className="sub-title">{subTitle}</span>
                    <h3
                        className="title mb-lg-0"
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></h3>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
                <div className="title-section pl-xl-5">
                    <p
                        className={`${excerptClassOption}`}
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                    ></p>
                </div>
            </div>
        </div>
    );
};

SectionTitleTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    classOption: PropTypes.string,
    excerptClassOption: PropTypes.string,
};
SectionTitleTwo.defaultProps = {
    classOption: "section-title-two",
};

export default SectionTitleTwo;
