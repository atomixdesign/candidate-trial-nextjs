import React, { useEffect, useState } from 'react'
import './WebMenuSection.component.scss'
import Image from 'next/image'
import SubMenuImg from '@/images/submenuimg.png'
import Link from 'next/link'

const WebMenuSection = ({ menuItems, hoveredId }: any) => {
    const [menuItem, setMenuItem] = useState<any>([])
    useEffect(() => {
        const filteredItem = menuItems.find((x: any) => x.id === hoveredId);
        console.log(filteredItem)
        setMenuItem(filteredItem)
    }, [hoveredId])

    return (
        <section className='main_section' >
            <div className='row'>
                <div className="column">
                    <Image src={SubMenuImg} alt='FirstColumnImg' />

                    {/* <Image src={SubMenuImg} alt='FirstColumnImg' /> */}
                    {/* <Image src={SubMenuImg} alt='FirstColumnImg' /> */}
                    {hoveredId != 0 && menuItem != undefined &&
                        menuItem.menu.map((subMenuitem: any, subMenuindex: number) => {
                            console.log(subMenuitem.subMenu)
                            return (
                                <p key={subMenuindex} style={{ height: '400px', margin: '0' }}>
                                    <h4>{subMenuitem.title}</h4>
                                    <div>
                                        {
                                            subMenuitem.subMenu.map((sub: any, i: number) => {
                                                return (
                                                    <Link href={''} key={i}>
                                                        {sub.title}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default WebMenuSection