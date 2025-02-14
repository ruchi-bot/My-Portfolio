import React from "react";

import styles from "./TechnicalSkills.module.css";
import { getImageUrl } from "../../utils";

export const TechnicalSkills = () => {
  return (
    <section id="technicalskills" className={styles.container}>
      <div className={styles.text}>
        <h2>Technical Skills</h2>
        <p>Here are some of the technical skills I have acquired.</p>
      </div>
      <ul className={styles.skillsList}>
        <li className={styles.skillCategory}>
          <strong>Languages:</strong> Java, Python, C, C++
        </li>
        <li className={styles.skillCategory}>
          <strong>Database:</strong> MySQL
        </li>
        <li className={styles.skillCategory}>
          <strong>Frameworks:</strong> React Js
        </li>
        <li className={styles.skillCategory}>
          <strong>Tools:</strong> GitHub
        </li>
        <li className={styles.skillCategory}>
          <strong>Other Technologies:</strong> Internet of Things, Data Structures And Algorithms, Operating System
        </li>
      </ul>
    </section>
  );
};

