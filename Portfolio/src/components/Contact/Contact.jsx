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
          <img
           // src={getImageUrl("contact/emailIcon.png")}
            src="/assets/contact/emailIcon.png" 
            alt="Email icon"
          />
          <a
            href="mailto:ruchisaini2471@gmail.com"
            aria-label="Send an email to Ruchi Saini"
          >
            ruchisaini2471@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            //src={getImageUrl("contact/linkedinIcon.png")}
            src="/assets/contact/linkedinicon.png" 
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/ruchi-saini-932431262/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ruchi Saini's LinkedIn profile"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img
           // src={getImageUrl("contact/githubIcon.png")}
            src="/assets/contact/githubIcon.png" 
            alt="GitHub icon"
          />
          <a
            href="https://github.com/ruchi-bot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ruchi Saini's GitHub profile"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};