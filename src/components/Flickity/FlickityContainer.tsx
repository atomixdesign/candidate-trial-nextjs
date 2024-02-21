'use client'
import React from 'react'
import Flickity from "react-flickity-component";
const flickityOptions = {
    contain: true,
    wrapAround: true,
    fullscreen: true,
};
const FlickityContainer = ({ children }: any) => {
    return (
        <Flickity options={flickityOptions}>
            {children}
        </Flickity>
    )
}

export default FlickityContainer