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

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openItem, setOpenItem] = useState(null);
    const pathname = usePathname();
    const handleClick = () => {
        setOpenMenu(!openMenu);
    };
    const openItemMenu = (title: any) => {
        setOpenItem((prevItem: any) => (prevItem === title ? null : title));
    };
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
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.url}>
                                    <div className={pathname === item.url ? 'activeWebLink' : 'webNavLink'}>
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>

                                </Link>
                            </li>
                        );
                    })}
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