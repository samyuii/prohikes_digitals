import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeData from "../../../data/home.json";
import Brand from "../../../components/brand/index";

const BrandContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: false,
        navigation: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3,
            },

            // when window width is >= 640px
            992: {
                slidesPerView: 4,
            },
        },
    };
    return (
        <div className="brand-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper className="brand-carousel" {...swiperOption}>
                            {HomeData[1].brand &&
                                HomeData[1].brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
