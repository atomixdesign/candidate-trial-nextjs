'use client'
import menuItems from '@/data/MenuItems.json';
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import './Navbar.component.scss'
import Image from 'next/image';
import CompanyLogo from '@/images/COMPANY LOGO.png'
import { useState } from 'react';
import Link from "next/link"
import { IoMdAdd } from "react-icons/io";
import MenuItem from '../MenuItem/MenuItem';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import WeatherWidget from '../Weather/WeatherWidget';
import WebMenuSection from './WebMenuSection/WebMenuSection';

const Navbar = () => {
    const [hoveredId, setHoveredId] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [openItem, setOpenItem] = useState(null);
    const pathname = usePathname();
    const handleClick = () => {
        setOpenMenu(!openMenu);
    };
    const openItemMenu = (title: any) => {
        setOpenItem((prevItem: any) => (prevItem === title ? null : title));
    };

    const handleHover = (id: number) => {
        console.log(id)
        setHoveredId(id)
    }

    return (
        <>
            <nav className='navbar'>
                <h1 className='navbarLogo'>
                    <Image
                        priority
                        src={CompanyLogo}
                        alt="Company Logo"
                    />
                </h1>
                <div className='menuIcon' onClick={handleClick}>
                    {
                        openMenu ? <IoMdClose /> : <FaBars />
                    }
                </div>
                {/* web */}
                <ul className='navMenu'>
                    {menuItems.map((item: any, index) => {
                        // const filteredItem = menuItems.find((x: any) => x.id === hoveredId);
                        return (
                            <li key={index} className='item navList' onMouseEnter={() => handleHover(item.id)} >
                                <Link href={item.url} className=''>
                                    <div className={pathname === item.url ? 'activeWebLink' : 'webNavLink'}>
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>
                                </Link>
                                <div className="arrow" />
                                <div className="submenu-wrapper">
                                    <div className="item-submenu">
                                        {/* <div className="submenu-group">
                                            <a href="#" className="submenu-link-master">Heladeras y freezers</a>
                                            <a href="#" className="submenu-link">Heladeras</a>
                                            <a href="#" className="submenu-link">Freezers</a>
                                            <a href="#" className="submenu-link">Cavas y Frigobares</a>
                                            <WebMenuSection />
                                        </div> */}
                                        {/* {
                                            item.menu.map((menuItem: any, menuIndex: number) => {
                                                return (
                                                    <WebMenuSection menuItem={menuItem} menuIndex={menuIndex} />
                                                )
                                            })
                                        } */}
                                        <WebMenuSection menuItems={menuItems} hoveredId={hoveredId} />

                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    <WeatherWidget />
                </ul>

                <div className='endBtn'>
                    <Button className='gray_contact_btn'>
                        CONTACT US
                    </Button>
                </div>
            </nav>
            {/* mobile */}
            <ul className={openMenu ? `active mobNavMenu` : `mobNavMenu`}>
                {menuItems.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            {...item}
                            onToggle={openItemMenu}
                            isOpen={openItem === item.title}
                        />
                    );
                })}
                <div className='btnDiv'>
                    <Button className='gray_contact_btn'>
                        CONTACT US
                    </Button>
                </div>
            </ul>
        </>
    )
}

export default Navbar