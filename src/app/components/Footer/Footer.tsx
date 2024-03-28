import React from "react";
import { promises as fs, link } from 'fs';
import Link from "next/link";

const Footer = async() => {
    const footerFile = await fs.readFile(process.cwd() + '/dataFiles/footer.json', 'utf-8');
    const links = JSON.parse(footerFile);

    const socialLinksFile = await fs.readFile(process.cwd() + '/dataFiles/socials.json', 'utf-8');
    const socials = JSON.parse(socialLinksFile);

    const bottomLinksFile = await fs.readFile(process.cwd() + '/dataFiles/bottom.json', 'utf-8');
    const blinks = JSON.parse(bottomLinksFile);

    return (
        <div className="footer">
            <div className="footer-columns">
                <div className="footer-logo">
                    <a href="" className="logo">Company Logo</a>
                </div>

                {links.map( link => (
                    link.submenu ? (
                        <div className="footer-col" key={link.id}>
                            <div className="title">{link.text}</div>
                            <ul>
                                {link.submenu.map(subm => (
                                    <li key={subm.id}><Link href={subm.href}>{subm.text}</Link></li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="footer-col" key={link.id}>
                            <div className="title">{link.text}</div>
                        </div>
                    )
                ))}
            </div>
            <div className="bottom-links">
                <ul>
                    {blinks.map(blin => (
                        <>
                        {blin.href ? (
                            <li key={blin.id}><Link href={blin.href}>{blin.text}</Link></li>
                        ) : (
                            <li key={blin.id}>{blin.text}</li>
                        )}
                        </>
                        
                    ))}
                </ul>
                <div className="social-icons">
                    {socials.map( social => (
                        <a href={social.href} key={social.id}>
                            <i className={`fa ${social.class}`} aria-hidden="true"></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer