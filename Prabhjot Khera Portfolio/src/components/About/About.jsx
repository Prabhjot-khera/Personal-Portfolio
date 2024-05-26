import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="waterloo logo" />
            <div className={styles.aboutItemText}>
              <h3>University of Waterloo</h3>
              <p>
                I'm a candidate for a BASc in mechatronics engineering looking for the AI Option. FUN FACT: I love playing soccer intramurals and working out
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Development</h3>
              <p>
                I have amassed experience in robotics as well as full stack and cloud development
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Future Expectations</h3>
              <p>
                I am looking forward to finishing my degree and gaining internship experience in full-stack, Machine Learning, and Robotics 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};