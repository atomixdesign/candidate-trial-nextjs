import React from "react";
import { promises as fs, link } from 'fs';
import Image from "next/image";
import MobileMenu from "./MobileMenu";
 
interface Link {
  id: number,
  text: string
}

const Header = async () => {
const headerFile = await fs.readFile(process.cwd() + '/dataFiles/menu.json', 'utf-8');
const links = JSON.parse(headerFile);
    
  return (
    <nav>
      <a href="" className="logo">Company Logo</a>
      <MobileMenu />
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
                              <a href="#" key={lalink.id}>{lalink.text}</a>
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
              <a
                href={link.href}
                key={link.id}
                className={` ${link.class ? link.class : "" }`}
                >
                  {link.text}
                </a>
            )
          )
        )}
    </nav>
  );
}
export default Header