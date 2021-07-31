import React from 'react';

import styles from "../static/css/sectionThree.module.css"
import image from "../static/images/sectionThree.jpg"

const SectionThree = () => {
    return (
        <div className={styles.content}>
            <div className={styles.getStartedSection}>
                <h4 className={styles.redtext}>Our Story</h4>
                <h4 className={styles.highlight}>John Maxwell and Rob Hoskins team up to Change Your World!</h4>
                <h4 className={styles.story}>Transformation is a buzz word, but few know how to define it, much less effect it. John and Rob have led transformational efforts in communities all over the world! They have a track record that shows results in the lives of students and adults across all streams of influence. They are offering to walk with you and I as we determine what we can do to make a positive difference wherever we are. Please join us on the journey!</h4>
            </div>
            <div className={styles.imageContainer}><img className={styles.image} src={image} alt="grow" /></div>
        </div>
    );
}

export default SectionThree;
