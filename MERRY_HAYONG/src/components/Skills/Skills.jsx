import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills=()=>{
    return(
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill,id)=>
                    {
                        return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillimage}>
                                <img src={skill.imageSrc} alt={skill.title}></img>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};