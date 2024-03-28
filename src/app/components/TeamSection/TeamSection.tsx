import Image from "next/image";
import { promises as fs } from 'fs';
import React from "react";
import steam from "./TeamSection.module.css";

interface User {
    id: number
    name: string;
    position: string;
    photo: string;
}

const TeamSection = async () => {
    const file = await fs.readFile(process.cwd() + '/dataFiles/team.json', 'utf-8');
    const users: User[] = JSON.parse(file);

    return (
        <>
        <div className={steam.teamSection}>
            <div className={steam.title}>Team section</div>
            {users.map(user =>
                <div key={user.id} className={steam.teamItem}>
                    <div className={steam.teamPhoto}>
                        <Image
                            src={user.photo}
                            width={408}
                            height={254}
                            alt={user.name}
                            className={steam.contentImage}
                        />
                    </div>
                    <div className={steam.teamPos}>{user.position}</div>
                    <div className={steam.teamName}>{user.name}</div>
                </div>
            )}
        </div>

        <div className={steam.teamMobile}>
            <div className={steam.title}>Team section</div>
            <div className="" data-flickity='{ "wrapAround": true }'>
                {users.map(user => (
                    <div className="" key={user.id}>
                        <div className={steam.userPhoto}>
                            <Image
                                src={user.photo}
                                alt={user.name}
                                width={408}
                                height={254}
                            />
                        </div>
                        <div className={steam.userInfo}>
                            <div className={steam.userPos}>{user.position}</div>
                            <div className={steam.userName}>{user.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default TeamSection