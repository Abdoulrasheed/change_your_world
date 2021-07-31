import React from 'react';

import styles from "../static/css/sectionTwo.module.css"
import image from "../static/images/sectionTwo.jpg"

const SectionTwo = () => {
    return (
        <div className={styles.content}>
            <div className={styles.imageContainer}><img className={styles.image} src={image} alt="grow" /></div>
            <div className={styles.getStartedSection}>
                <div className={styles.redline}></div>
                <h4 className={styles.highlight}>Looking to lead?</h4>
                <h4 className={styles.joinText}>Facilitate a Transformation Tables Group</h4>
                <button className={styles.getStartedButton}>Get Started</button>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default SectionTwo;
