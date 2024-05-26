import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prabhjot Khera</h1>
        <p className={styles.description}>
          I'm a Mechatronics Engineering student at the University of Waterloo and I am all for anything AI, Robotics, and Development
        </p>
        <a href="../assets/about/Resume.pdf" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("about/bitmoji.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};