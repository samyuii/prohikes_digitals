import React, { Fragment, useEffect, useState, Component } from "react";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import MobileMenu from "../../components/menu/mobile-menu";

const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".sticky-header");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <header
                className={`header-section sticky-header ${
                    scroll > headerTop ? "is-sticky" : ""
                }`}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="header-logo">
                                <Logo
                                    classOption="d-block"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                />
                            </div>
                        </div>

                        <div className="col text-end">
                            <MainMenu />
                            <button
                                className="toggle"
                                onClick={onCanvasHandler}
                            >
                                <span className="icon-top"></span>
                                <span className="icon-middle"></span>
                                <span className="icon-bottom"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
        </Fragment>
    );
};

export default Header;
