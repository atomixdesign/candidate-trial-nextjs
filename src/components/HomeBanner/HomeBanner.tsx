import React from 'react'
import './HomeBanner.component.scss'
import HomeBannerImg from '@/images/Banner background@2x.png'
import HomeBannerMobImg from '@/images/Mask Group 1.png'
import Image from 'next/image'
import Button from '../Button/Button'

const HomeBanner = () => {
    return (
        <section className='bannerSec'>
            <div className="container">
                <div className='bannerImg'>
                    <Image src={HomeBannerImg} alt="banner" className='webImg' />
                    <Image src={HomeBannerMobImg} alt="banner" className='mobImg' />
                    <div className='bannerText'>
                        <strong>
                            <span>The ultimate atomix starter theme to help your business grow faster!</span>
                        </strong>
                        <div className='btnDiv'>
                            <Button className='maroon_contact_btn'>
                                CONTACT US
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default HomeBanner