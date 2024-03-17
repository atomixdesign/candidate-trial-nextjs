import React from "react";
import { promises as fs, link } from 'fs';
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
 
interface Link {
  id: number,
  text: string
}

const Header = async () => {
const headerFile = await fs.readFile(process.cwd() + '/dataFiles/menu.json', 'utf-8');
const links = JSON.parse(headerFile);
    
  return (
    <>
    <nav>
      <a href="#" className="logo">Company Logo</a>
      <a href="#" key={1000} id="humburger"><i className="fas fa-bars" ></i></a>
      {links.map(link  => 
        (
          link.sublinks ? (
            <div className="dropdown" key={link.id}>
              <button className="dropbtn">
                  {link.text}
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">  
                  <div className="row">
                    <div className="column">
                      <Image
                        src="/megaMenu.png"
                        width={296}
                        height={350}
                        alt="Mega menu" />
                    </div>
                    {link.sublinks.map( sublink => (
                      <div className="column" key={sublink.id}>
                        <h3>{sublink.text}</h3>
                        {sublink.submenu ? (
                          <div key={sublink.submenu.id}>
                            {sublink.submenu.map( lalink => (
                              <Link href="#" key={lalink.id}>{lalink.text}</Link>
                            ))}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={link.href}
                key={link.id}
                className={`navItem ${link.class ? link.class : "" }`}
                >
                  {link.text}
                </Link>
            )
          )
        )}
        <div className="weatherWidget">
          <WeatherWidget />
        </div>
    </nav>
    </>
    
  );
}
export default Header