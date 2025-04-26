import React from "react";

import styles from "./Contact.module.css";

export const Contact=()=>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact:</h2>
                <p>Feel free To Reach Out!</p>
                <a href="#hero">Go Back To The Top</a>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/assets/Contact/emailIcon.png" alt="email icon" ></img>
                    <a href="mailto:hayong.merry06@gmail.com">hayong.merry06@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/Contact/linkedinIcon.png" alt="linkedin icon" ></img>
                    <a href="https://www.linkedin.com/in/merry-hayong-011016266/">Linkedin.com/Merry Hayong</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/Contact/githubIcon.png" alt="github icon" ></img>
                    <a href="https://github.com/MERRY002">Github.com/MERRY002</a>
                </li>
            </ul>
        </footer>
    )
}