import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";

const PageBannerImage = ({ image }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div
            className="banner-content scene banner-img"
            id="scene"
            ref={sceneEl}
        >
            <div data-depth="0.2">
                <img src={process.env.PUBLIC_URL + image} alt="img" />
            </div>
        </div>
    );
};

PageBannerImage.propTypes = {
    image: PropTypes.string,
};

export default PageBannerImage;
