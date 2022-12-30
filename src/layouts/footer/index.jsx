import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                <img
                    className="footer-shape"
                    src={process.env.PUBLIC_URL + "/images/footer/1.png"}
                    alt="shape"
                />
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-9"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo-footer.png`}
                                />
                                <p>Follow us on</p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://whatsapp.com/dl/"
                                            icon="icofont-whatsapp"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.facebook.com/"
                                            icon="icofont-facebook"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.instagram.com/pro_hikes/"
                                            icon="icofont-instagram"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service"
                                            }
                                        >
                                            Our Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={process.env.PUBLIC_URL + "/faq"}
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/team"
                                            }
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/contact"
                                            }
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/1`
                                            }
                                        >
                                            Paid ads
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/2`
                                            }
                                        >
                                            Email Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/3`
                                            }
                                        >
                                            Creative Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/4`
                                            }
                                        >
                                            Copywriting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/5`
                                            }
                                        >
                                            Social Media Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/6`
                                            }
                                        >
                                            Brand Enhancement Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <p>
                                    Gyan Vihar Marg, Jagatpura, Jaipur,
                                    Rajasthan 302017
                                </p>
                                <ul className="address">
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+917610805234"
                                        >
                                            +91 7610805234
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+9191660111289"
                                        >
                                            +91 91660111289
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:business.prohikes@gmail.com"
                                        >
                                            business.prohikes@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:business@prohikes.tech"
                                        >
                                            business@prohikes.tech
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy;
                                    <a
                                        href="https://themeforest.net/user/ProHikes/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ProHikes
                                    </a>
                                    , All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
