import Link from 'next/link';
import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import '../Navbar/Navbar.component.scss'

const SubMenuItem = ({ title, url, subMenu, onToggleSub, isOpenSub }: any) => {
    const handleToggle = () => {
        onToggleSub(title);
    };
    return (
        <>
            <li className={`listItem listItemMenu`} style={{ backgroundColor: isOpenSub && '#FAF5F0' }}>
                {
                    subMenu !== undefined && subMenu.length !== 0 ?
                        <a style={{ color: isOpenSub ? '#CBAE94' : '#4B4F52', cursor: 'pointer' }} onClick={handleToggle} >
                            {title}
                        </a>
                        :
                        <Link href={url} style={{ color: isOpenSub ? '#CBAE94' : '#4B4F52' }} onClick={handleToggle} >
                            {title}
                        </Link>
                }

                {subMenu !== undefined && subMenu.length !== 0 &&
                    <>
                        {
                            isOpenSub ?
                                <IoMdRemove onClick={handleToggle} /> : <IoMdAdd onClick={handleToggle} />
                        }
                    </>
                }
            </li>
            <ul className={isOpenSub ? `menuTitle activeTitle` : 'menuTitle'} style={{ backgroundColor: isOpenSub && '#FAF5F0' }}>
                {subMenu !== undefined && subMenu.map((itm: any, index: number) => (
                    isOpenSub &&
                    <li key={index} className={`listItem listItemMenu listItemSubMenu`} >
                        <Link href={''} style={{ color: '#4B4F52' }} >
                            {itm.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SubMenuItem