import Image from 'next/image'
import React from 'react'
import './SliderSection.component.scss'
import Button from '@/components/Button/Button'

const SliderSection = ({ title, image, content }: any) => {
    return (
        <div className='sliderSectionContainer'>
            <div className='row'>
                <div className='column first_col'>
                    <img src={image} alt={title} />
                </div>
                <div className='column second_col'>
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {content}
                    </p>
                    <div className='btnDiv'>
                        <Button className='maroon_contact_btn'>
                            CONTACT US
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderSection