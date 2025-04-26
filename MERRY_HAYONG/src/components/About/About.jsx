import React from "react";
import styles from "./About.module.css";
export const About=()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src="/assets/about/laptop sitting.png" alt="Image of me with a laptop" className={styles.aboutImage}></img>
                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}><img src="/assets/about/cursorIcon.png" alt="cursor icon"></img>
                    <div className={styles.abouitemtext}>
                        <h3>Frontend Developer </h3>
                        <p>
                            i'm a frontend developer with experience in building responsive and optimised sites using react js and node js.
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutitem}><img src="/assets/about/serverIcon.png" alt="server icon"></img>
                    <div className={styles.abouitemtext}>
                        <h3>Backend Developer </h3>
                        <p>
                            i have experience working with back-end systems and API's.
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutitem}><img src="/assets/about/uiIcon.png" alt="ui icon"></img>
                    <div className={styles.abouitemtext}>
                        <h3>UI Designer</h3>
                        <p>
                            I have worked on designing web pages and even logos using figma and canva.
                        </p>
                    </div>
                    </li>
                    <li className={styles.aboutitem}><img src="/assets/about/testing icon.png" alt="testing icon"></img>
                    <div className={styles.abouitemtext}>
                        <h3>Software and Web Tester </h3>
                        <p>
                            I have used selenium, Jira and Postman for testing of websites and create bug reports on them. 
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}