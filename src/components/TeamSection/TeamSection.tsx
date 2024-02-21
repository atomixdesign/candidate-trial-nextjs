import React from 'react'
import './TeamSection.component.scss'
import TeamMember from '@/data/TeamMembers.json';
import Card from '../Card/Card';
import FlickityContainer from '../Flickity/FlickityContainer';

const TeamSection = () => {
    return (
        <>
            <div className='team_section_container'>
                <h2>Team Section</h2>
                <div className="cards">
                    {
                        TeamMember.map((member, index) => {
                            return (
                                <Card index={index} member={member} />
                            )
                        })
                    }
                </div>

            </div>
            <div className='mobile_team_section_container'>
                <h2>Team Section</h2>
                <div className='mobile_cards'>
                    <FlickityContainer>
                        {
                            TeamMember.map((member, index) => {
                                return (
                                    <Card index={index} member={member} />
                                )
                            })
                        }
                    </FlickityContainer>
                </div>
            </div>


        </>
    )
}

export default TeamSection