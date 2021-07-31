import React from 'react';

import styles from "../static/css/sectionFive.module.css"
import image from '../static/images/sectionFive.jpg'

const SectionFive = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h3 className={styles.subtitle}>Your Stories</h3>
                <h1 className={styles.title}>Changing The World</h1>
            </div>
            <div className={styles.contentContainer}>
                <p className={styles.content}>
                    Even though we were in quarantine, my friend invited me to participate in Transformation Tables virtually. I joined the group and have learned a lot about myself and am experiencing personal growth. During the lesson on “Initiative” my action step was to do a small project for my community during the COVID-19 crisis. I followed through and did it, and now my company has stepped in and is maintaining the program to serve the community. As a facilitator of Transformation Tables I am encouraged to see the impact the program has had on the people in our group. I hear about their growth as they share their action steps and as they report the decisions made to improve their lives. Personally, the program challenged me to be intentional to choose my future, and so now I am studying to be an engineer.
                </p>
                <p className={styles.hero}>Daniel Hernandez</p>
                <p className={styles.heroLocation}>Costa Rica</p>
                <img className={styles.heroPicture} src={image} alt="grow" />
            </div>
        </div>
    );
}

export default SectionFive;
