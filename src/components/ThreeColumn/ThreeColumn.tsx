import React from 'react'
import './ThreeColumn.component.scss'
import FirstColumn from './Columns/FirstColumn'
import ThirdColumn from './Columns/ThirdColumn'
import SecondColumn from './Columns/SecondColumn'
import Title from '../Title/Title'

const ThreeColumn = () => {
    return (
        <div className='threeColumnContainer'>
            <Title title={'Three column with image'} />
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