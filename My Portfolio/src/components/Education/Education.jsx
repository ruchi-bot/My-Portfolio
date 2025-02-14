import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <div className={styles.text}>
        <h2>Education</h2>
        <p>Here is a summary of my academic background.</p>
      </div>
      <ul className={styles.educationList}>
        <li className={styles.educationItem}>
          <img //src={getImageUrl("education/schoolIcon.jpg")}
          //  alt="School icon"
          src = "/Assets/education/schoolIcon.jpg" 
          alt="School Icon" />
          <div>
            <h3>High School</h3>
            <p>R.L.S.C.S.V.M.I.C., Jaspur,, 2019 - 2020</p>
            <p>Marks-86%</p>
          </div>
        </li>
        <li className={styles.educationItem}>
          <img // src={getImageUrl("education/schoolIcon.jpg")}//
          //  alt="School icon" 
          src = "/Assets/education/schoolIcon.jpg" 
          alt="School Icon"/>
          <div>
            <h3>Intermediate School</h3>
            <p>R.L.S.C.S.V.M.I.C., Jaspur,, 2021 - 2022</p>
            <p>Marks-76%</p>
          </div>
        </li>
        <li className={styles.educationItem}>
          <img // src={getImageUrl("education/collegeIcon.png")} //alt="College icon" 
          src="/Assets/education/collegeIcon.png" 
          alt="College Icon" />
          <div>
            <h3>Bachelor of Technology</h3>
            <p>Graphic Era Hill University, Computer Science, 2022 - 2026</p>
            <p>CGPA-7/10</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
