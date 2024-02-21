import React from 'react'
import './Slider.component.scss'
import Image from 'next/image'
import FlickityContainer from '../Flickity/FlickityContainer'
import SliderItems from '@/data/SliderItems.json'
import SliderSection from './SliderSection/SliderSection'

const Slider = () => {
    return (
        <div className='carouselSlider'>
            <div className='heading'>
                Carousel section
            </div>
            <FlickityContainer>
                {
                    SliderItems.map((itm, index) => {
                        return (
                            <SliderSection key={index} {...itm} />
                        )
                    })
                }

            </FlickityContainer>
        </div>
    )
}

export default Slider