import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ruchi</h1>
        <p className={styles.description}>
          A passionate Full Stack Software Developer with expertise in building
          Web and Mobile applications using JavaScript, React.js, Node.js, React
          Native, and other modern libraries and frameworks.
        </p>
        <a
          href="mailto:ruchisaini2471@gmail.com"
          className={styles.contactBtn}
          aria-label="Contact Ruchi Saini via email"
        >
          Contact Me
        </a>
      </div>
      <img
        //src={getImageUrl("hero/heroImage.png")}
         src="/Assets/hero/heroImage.png" 

        alt="Ruchi Saini, Full Stack Software Developer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

