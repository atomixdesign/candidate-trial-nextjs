import React from 'react'
import './ThreeColumn.component.scss'
import FirstColumn from './Columns/FirstColumn'
import ThirdColumn from './Columns/ThirdColumn'
import SecondColumn from './Columns/SecondColumn'

const ThreeColumn = () => {
    return (
        <div className='threeColumnContainer'>
            <div className='heading'>
                Three column with image
            </div>
            <section>
                <div className='row'>
                    <FirstColumn className={`column first_col`} />
                    <SecondColumn className={`column second_col`} />
                    <ThirdColumn className={`column third_col`} />
                </div>
            </section>
        </div>
    )
}

export default ThreeColumn