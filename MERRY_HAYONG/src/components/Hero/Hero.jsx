import React from "react";
import styles from "./Hero.module.css";
export const Hero=()=>{
    return( 
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'am Merry Hayong</h1>
                <p className={styles.description}>
                    I'am a Developer with Experience working on projects in MERN, Front-End Development 
                    and currently working with API's to increase my skills in Back-End Development.
                    Reach out if you'd like to learn more!
                </p>
                <a href="mailto:hayong.merry06@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src="/assets/about/merry-ico2.png" alt="Hero image of me" className={styles.heroimg}></img>
            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </section>
               
       
    );
};