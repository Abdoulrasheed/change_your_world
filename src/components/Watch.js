import React, { useState } from 'react';

import styles from "../static/css/watch.module.css"
import bg from "../static/video/cyw.mp4"

const Watch = () => {
    const [isOpen, setisOpen] = useState(false);

    const handlePlay = () => {
        setisOpen(!isOpen);
    }

    return (
        <div className={styles.watchContainer}>

            <div className={styles.videoBgContainer}>
                <video className={styles.videoBg} autoPlay loop muted>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>
                    <p className={styles.introSubtitle}>Change Your World</p>
                    How anyone, anywhere can make a difference</h1>
                <div title="Watch Video" className={styles.actionContainer} onClick={handlePlay}>
                    <h4>Watch Video</h4>
                    <span className={styles.playButton}></span>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Watch;
