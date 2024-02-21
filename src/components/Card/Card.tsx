import React from 'react'
import './Card.component.scss'

const Card = ({ index, member }: any) => {
    return (
        <div className="card" key={index}>
            <div className="card-hero">
                <img src={member.image} width={288} />
            </div>
            <div className="card-header">
                <h4>{member.position}</h4>
                <h3>{member.name}</h3>
            </div>
        </div>
    )
}

export default Card