import React from 'react';

import styles from "../static/css/footer.module.css"
import image from "../static/images/footer.png"
import logo from "../static/images/logo.svg"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bookPurchaseContainer}>
                <div className={styles.detail}>
                    <h2 className={styles.subtitle}>Purchase your copy</h2>
                    <h1 className={styles.title}>Change Your World</h1>
                    <h3 className={styles.motivation}>How Anyone, Anywhere Can Make a Difference</h3>
                    <h3 className={styles.author}>By John C. Maxwell and Rob Hoskins</h3>
                </div>
                <button className={styles.buyBookButton}>Buy Book</button>
            </div>
            <img className={styles.book} src={image} alt="book" />
            <div className={styles.footerContainer}>
                <p className={styles.title}>Start changing the world today! Click on button below to get started!</p>
                <button className={styles.getstartedButton}>Get Started</button>
                <p className={styles.logintext}>Already have an account? <a href="#f">Log in</a></p>
                <div className={styles.redline}></div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerI}>
                    <img src={logo} alt="logo" />
                    <a href="#c">Contact Us</a>
                </div>
                <hr className={styles.hr} />
                <div className={styles.footerII}>
                    <p>&copy; 2021 John Maxwell Company. All rights reserved.</p>
                    <a href="#p">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
