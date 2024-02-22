'use client'
import React from 'react'
import './CarouselSection.component.scss'
import SliderItems from '@/data/SliderItems.json'
import SliderSection from './SliderSection/SliderSection'
import SliderComponent from '../SliderComponent/SliderComponent'
import Title from '../Title/Title'

const CarouselSection = () => {
    return (
        <div className='carouselSlider'>
            <Title title={'Carousel section'} />
            <div className='slider-container'>
                <SliderComponent>
                    {
                        SliderItems.map((itm, index) => {
                            return (
                                <SliderSection key={index} {...itm} />
                            )
                        })
                    }

                </SliderComponent>
            </div>
        </div>
    )
}

export default CarouselSection