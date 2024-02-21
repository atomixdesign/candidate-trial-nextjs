'use client'
import React, { useEffect, useState } from 'react'
import './footer.component.scss'
import CompanyLogo from '@/images/COMPANY LOGO.png'
import Image from 'next/image'
import footerLinks from '@/data/FooterLinks.json'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'
import SubMenuItem from '../SubMenuItem/SubMenuItem'

const Footer = () => {
    const [openItem, setOpenItem] = useState(null);
    // const [mappedData, setMappedData] = useState([]);
    const openItemMenu = (title: any) => {
        setOpenItem((prevItem: any) => (prevItem === title ? null : title));
    };

    return (
        <div className='footer'>
            <div className='heading'>
                <Image
                    priority
                    src={CompanyLogo}
                    alt="Company Logo"
                />
            </div>
            <div className='content'>
                {
                    footerLinks.map((item: any, index) => {
                        return (
                            <div key={index}>
                                <h4>{item.title}</h4>
                                {
                                    item.subMenu.map((sub: any, i: number) => {
                                        return (
                                            <p key={i}>
                                                <Link href={''}>
                                                    {sub.title}
                                                </Link>
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* mobile */}
            <div className='mobContent'>
                {footerLinks.map((item: any, index) => {
                    return (
                        <SubMenuItem key={index}
                            {...item} onToggleSub={openItemMenu}
                            isOpenSub={openItem === item.title} />
                    )
                })
                }

            </div>
            <div className='underFooter'>
                <hr className='footerDevider' />
                <div className='footerItems'>
                    <div className='companyLinks'>
                        <Link href={''}>© 2022 Company Inc.</Link>
                        <Link href={''}>Terms and conditions</Link>
                        <Link href={''}>Privacy policy</Link>
                        <Link href={''}>Website by atomix</Link>
                    </div>
                    <div className='socialIcons'>
                        <Link href={''}>
                            <FaFacebook />
                        </Link>
                        <Link href={''}>
                            <FaTwitter />
                        </Link>
                        <Link href={''}>
                            <FaInstagram />
                        </Link>
                        <Link href={''}>
                            <FaLinkedin />
                        </Link>
                        <Link href={''}>
                            <FaYoutube />
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer