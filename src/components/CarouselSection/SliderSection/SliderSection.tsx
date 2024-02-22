import Image from 'next/image'
import React from 'react'
import './SliderSection.component.scss'
import Button from '@/components/Button/Button'

const SliderSection = ({ title, image, content }: any) => {
    return (
        <div className='sliderSectionContainer'>
            <div className='row'>
                <div className='column first_col'>
                    {/* <Image src={SliderImage} alt='SliderImage' /> */}
                    <Image src={image} alt={title} width={200} height={350} />
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