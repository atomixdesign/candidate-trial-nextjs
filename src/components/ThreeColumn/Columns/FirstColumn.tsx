import Image from 'next/image'
import React from 'react'
import FirstColumnImg from '@/images/Mask Group 2@2x.png'

const FirstColumn = ({ className }: any) => {
    return (
        <div className={className}>
            <h4>Lorem ipsum dolor sit amet conse tetur sadipiscing elite dolore.</h4>
            <Image src={FirstColumnImg} alt='FirstColumnImg' />
        </div>
    )
}

export default FirstColumn