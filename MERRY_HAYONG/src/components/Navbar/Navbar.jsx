import React,{useState} from "react";

import styles from "./Navbar.module.css";
export const Navbar =()=>{
    const[menuOpen,setOpenMenu]=useState(false);
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={menuOpen?"/assets/nav/closeIcon.png":"/assets/nav/menuIcon.png"}
            alt="menu-button"
            onClick={()=>setOpenMenu(!menuOpen)}/>
            <ul 
                className={`${styles.menuItems} ${menuOpen? styles.menuOpen:""}`}
                onClick={()=>setOpenMenu(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}