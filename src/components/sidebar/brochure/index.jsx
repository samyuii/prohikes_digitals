import React from "react";
import Download from "@axetroy/react-download";

const element = document.createElement("div");
document.body.appendChild(element);

const Brochure = () => {
    return (
        <div className="sidbar-menu">
            <ul>
                <li className="m-0">
                    <Download
                        file="test.txt"
                        content="Ha Ha Ha, Heavy Relax, See You Not For Mind. kew amare chuse kore na not on like. cold baby cold baby,  just chill.....
                        [Motherboard Takla]"
                    >
                        <button>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/service/icon/small/9.png"
                                }
                                alt="logo"
                            />
                            Brochure.PDF
                        </button>
                    </Download>
                </li>
                <li className="m-0">
                    <Download
                        file="test.txt"
                        content="Ha Ha Ha, Heavy Relax, See You Not For Mind. kew amare chuse kore na not on like. cold baby cold baby,  just chill.....[Motherboard Takla]"
                    >
                        <button className="border-0">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/service/icon/small/10.png"
                                }
                                alt="logo"
                            />
                            Brochure.DOC
                        </button>
                    </Download>
                </li>
            </ul>
        </div>
    );
};

export default Brochure;
