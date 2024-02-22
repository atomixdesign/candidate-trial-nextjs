'use client'
import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({ children }: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderComponent