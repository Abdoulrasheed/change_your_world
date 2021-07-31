import React from 'react';

import styles from "../static/css/sectionOne.module.css"
import image from "../static/images/sectionOne.jpg"

const SectionOne = () => {
    return (
        <div>
            <div className={styles.topContainer}>
                <h3 className={styles.subtitle}>Now is the time</h3>
                <h1 className={styles.title}>Join a Table, Take Action, Change Your World!</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.getStartedSection}>
                    <div className={styles.redline}></div>
                    <h4 className={styles.highlight}>Looking to grow?</h4>
                    <h4 className={styles.joinText}>Join a Transformation Tables Group</h4>
                    <button className={styles.getStartedButton}>Get Started</button>
                </div>
                <div className={styles.imageContainer}><img className={styles.image} src={image} alt="grow" /></div>
            </div>
        </div>
    );
}

export default SectionOne;
