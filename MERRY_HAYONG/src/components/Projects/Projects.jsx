import React, { useRef, useEffect, useState } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const totalCards = projects.length;

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 20;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const cardWidth = container.firstChild.offsetWidth + 20;
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);

      setCurrentIndex(index);
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft < maxScrollLeft);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projectSliderWrapper}>
        {showLeft && (
          <button className={styles.leftArrow} onClick={() => scroll(-1)}>
            ‹
          </button>
        )}

        <div className={styles.pagination}>
          <span>
            {String(currentIndex + 1).padStart(2, "0")} — {String(totalCards).padStart(2, "0")}
          </span>
        </div>

        <div className={styles.project} ref={scrollRef}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        {showRight && (
          <button className={styles.rightArrow} onClick={() => scroll(1)}>
            ›
          </button>
        )}
      </div>
    </section>
  );
};