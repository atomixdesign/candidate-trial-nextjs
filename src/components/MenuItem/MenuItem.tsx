import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import '../Navbar/Navbar.component.scss'
import SubMenuItem from '../SubMenuItem/SubMenuItem';

const MenuItem = ({ title, url, menu, onToggle, isOpen }: any) => {
    const [openMenuItem, setOpenMenuItem] = useState(null);
    const handleToggle = () => {
        onToggle(title);
        console.log(title)
    };
    const openItemSubMenu = (menutitle: any) => {
        setOpenMenuItem((prevItem: any) => (prevItem === menutitle ? null : menutitle));
    };
    return (
        <>
            <li className='listItem' style={{ backgroundColor: isOpen && '#F7F7F7' }}>
                <Link href={menu !== undefined && menu.length !== 0 ? url : ''} style={{ color: isOpen ? '#CBAE94' : '#4B4F52' }} onClick={handleToggle} >
                    {title}
                </Link>
                {menu !== undefined && menu.length !== 0 &&
                    <>
                        {
                            isOpen ?
                                <IoMdRemove onClick={handleToggle} /> : <IoMdAdd onClick={handleToggle} />
                        }
                    </>
                }
            </li>
            <ul className={isOpen ? `menuTitle activeTitle` : 'menuTitle'} style={{ backgroundColor: isOpen && '#F7F7F7' }}>
                {menu !== undefined && menu.map((menuitm: any, index: number) => (
                    isOpen &&
                    <SubMenuItem
                        key={index}
                        {...menuitm}
                        onToggleSub={openItemSubMenu}
                        isOpenSub={openMenuItem === menuitm.title}
                    />
                ))}
            </ul>
        </>
    )
}

export default MenuItem