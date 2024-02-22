'use client'
import React from 'react'
import './TeamSection.component.scss'
import TeamMember from '@/data/TeamMembers.json';
import Card from '../Card/Card';
import Slider from 'react-slick';
import SliderComponent from '../SliderComponent/SliderComponent';
import Title from '../Title/Title';

const TeamSection = () => {
    return (
        <>
            <div className='team_section_container'>
                <Title title={'Team Section'} />
                <div className="cards">
                    {
                        TeamMember.map((member, index) => {
                            return (
                                <Card key={index} member={member} />
                            )
                        })
                    }
                </div>

            </div>
            <div className='mobile_team_section_container'>
                <Title title={'Team Section'} />
                <div className='mobile_cards slider-container'>
                    <SliderComponent>
                        {
                            TeamMember.map((member, index) => {
                                return (
                                    <Card key={index} member={member} />
                                )
                            })
                        }
                    </SliderComponent>
                </div>
            </div>


        </>
    )
}

export default TeamSection