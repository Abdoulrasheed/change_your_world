import React from 'react';

import styles from "../static/css/sectionFour.module.css"
// import video from "../static/video/sectionFour.mp4"
import thumb from "../static/images/thumb.jpg"

const SectionFour = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h3 className={styles.subtitle}>The Journey</h3>
                <h1 className={styles.title}>Transformation Happens around the Table, one Table at a Time</h1>
                <span className={styles.backcolor}></span>
                <h3 className={styles.thirdText}>Learn to Lead Yourself Well</h3>
                <p className={styles.paragraph}>John Maxwell talks about greatness coming from being bigger on the inside than on the outside. Values are what it takes to be bigger on the inside and these Transformation Tables will address 6 foundational values: Hope, Listening, Valuing Every Person, Integrity, Forgiveness, and Multiplication. TransformationTables meet for one hour a week over a six-week period of time.</p>
            </div>
            <div className={styles.content}>
                <div className={styles.getStartedSection}>
                    <h4 className={styles.highlight}>What to Expect on your Journey</h4>
                    <h4 className={styles.joinText}>Each Table is broken into 6 sections: Action Step Review, Insight, Benefits, Steps to follow, Reflect and Respond, and Evaluation and Action. The group will read the material together, share key insights, take time for self-reflection, and commit to an action step. As participants take small steps each week consistency compounds and life change is experienced.</h4>
                </div>
                <div className={styles.actionContainer}>
                    <img className={styles.video} src={thumb} alt="thumbnail" />
                    <div className={styles.videoOverlay}></div>
                    <div className={styles.playActionContainer}>
                        <h4>Watch Video</h4>
                        <span className={styles.playButton}></span>
                    </div>
                    <button className={styles.getStartedButton}>Get Started</button>
                    <span className={styles.signInText}>Already have an account? <a href="#k">Log In</a></span>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
