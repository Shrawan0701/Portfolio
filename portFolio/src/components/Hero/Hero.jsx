
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shrawan</h1>
        <p className={styles.description}>
          A full-stack developer and WEB3 developer. Reach out if you'd like to connect with me!
        </p>
        <a href="https://www.linkedin.com/in/shrawan-wandhekar-1b1894273/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/shrawan.jpg")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
