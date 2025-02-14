import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img //src={getImageUrl("contact/emailIcon.png")} 
          // alt="Email icon" 
            src="/Assets/contact/emailIcon.png" 
            alt="Email icon"/>
          <a href="mailto:ruchisaini2471@gmail.com">ruchisaini2471@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
           // src={getImageUrl("contact/linkedinIcon.png")}
            //alt="LinkedIn icon"
            src="/Assets/contact/linkedinicon.png" 
            alt="LinkedIn icon"
          />
           <a href="https://www.linkedin.com/in/ruchi-saini-932431262/">https://www.linkedin.com/in/ruchi-saini-932431262/</a>
        </li>
        <li className={styles.link}>
          <img //src={getImageUrl("contact/githubIcon.png")} alt="Github icon" 
          // 
          src="/Assets/contact/githubIcon.png" 
            alt="GitHub icon"
          />
          <a href="https://github.com/ruchi-bot">https://github.com/ruchi-bot</a>
        </li>
      </ul>
    </footer>
  );
};