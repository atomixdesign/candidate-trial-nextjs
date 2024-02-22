import React from 'react'
import listItems from '@/data/ListItem.json'
import { IoIosArrowForward } from 'react-icons/io'

const ThirdColumn = ({ className }: any) => {
    return (
        <div className={className}>
            <ul>
                {
                    listItems.map((itm: any, index) => {
                        return (
                            <li key={index} >
                                <IoIosArrowForward />
                                <span>
                                    {itm.item}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
            </p>
        </div>
    )
}

export default ThirdColumn