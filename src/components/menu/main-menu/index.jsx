import { NavLink } from "react-router-dom";
import React, { Component } from "react";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}>
                        Service
                    </NavLink>

                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/service"}
                            >
                                Service
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/Home-improvement-marketing/1"
                                }
                            >
                                Remodeling Marketing
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/">Pages</NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/team"}
                            >
                                team
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
