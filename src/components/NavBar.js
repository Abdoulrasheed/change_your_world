import React from 'react';
import { routes } from '../pages/routes';
import { withRouter } from 'react-router-dom';

import styles from "../static/css/nav.module.css"
import logo from "../static/images/logo.svg"

const NavBar = withRouter(({history}) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo} onClick={()=>history.push(routes.homePage)}>
                <img src={logo} alt="logo" />
            </div>
            <ul className={styles.navItems}>
                <li><span onClick={()=> history.push(routes.homePage)}>Home</span></li>
                <li><span onClick={()=> history.push(routes.bookPage)}>Buy Book</span></li>
                <li><span onClick={()=> history.push(routes.registerPage)}>Join Table/Register</span></li>
                <li><span onClick={() => history.push(routes.signinPage)}>Sign in</span></li>
                
                <span className={styles.actionContainer}>
                    <button className={styles.assessmentButton} onClick={()=>history.push(routes.assessmentPage)}>Take Assessment</button>
                    <span className={styles.languageIcon}></span>
                    <span className={styles.languageText}>Eng</span>
                </span>
            </ul>
        </nav>
    );
})

export default NavBar;
