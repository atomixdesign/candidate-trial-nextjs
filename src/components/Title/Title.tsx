import React from 'react'
import './Title.component.scss'

const Title = ({ title }: any) => {
    return (
        <div className='Title_heading'>
            {title}
        </div>
    )
}

export default Title