import React from "react";
import styles from '../styles/Header.module.css';
import Link from "next/link";
import { scaleDown as Menu } from 'react-burger-menu'


function Header (){
   
    return (
    <>

    <div className="nav">
    <div className={styles.header}>
        <div className={styles.topPad}>
            <ul className={styles.nav}>
                <Link href="/">
                <a>
                    <li>Home</li>
                </a>
                </Link>
                <Link href="/my-experiences"><li>
                
                        <a>My Experiences</a>
                
                    <ul className="dropdown">
                    <Link href="/korea-herald-joshua"><li><a>Korea Herald Joshua</a></li></Link>
                       <Link href="/avalon-english-academy"><li><a>Avalon English Academy</a></li></Link>
                       <Link href="/howard's-school"><li><a>Howard's School</a></li></Link>
                        <Link href="/world-language-school"><li><a>World Language Academy</a></li></Link>
                        <Link href="/sahmyook-elementary-school"><li><a>Sahmyook Elementary School</a></li></Link>
                    </ul>
                   </li>
                   </Link>
                <Link href="/classroom">
                <a>
                    <li>Classroom</li>
                </a>
                </Link>

                <Link href="/spare-time">
                <a><li>Spare Time</li></a>
                </Link>
                <Link href="/contact-me">
                <a><li>Contact Me</li></a>
                </Link>
            </ul>
        </div>
    </div>
    </div>
  



    </>
    )
}
export default Header;