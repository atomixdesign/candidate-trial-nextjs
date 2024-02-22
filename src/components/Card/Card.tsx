import React from 'react'
import './Card.component.scss'
import Image from 'next/image'

const Card = ({ key, member }: any) => {
    return (
        <div className="card" key={key}>
            <div className="card-hero">
                <Image src={member.image} alt={key} width={288} height={350} />
            </div>
            <div className="card-header">
                <h4>{member.position}</h4>
                <h3>{member.name}</h3>
            </div>
        </div>
    )
}

export default Card