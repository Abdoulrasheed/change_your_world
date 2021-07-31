import React, { useEffect, useRef, useState } from 'react';

import styles from "../static/css/assessment.module.css"
// import im from '../static/images/logo.svg'

const assessments = [
    {
        question: "I am able to identify specific actions I can take to create positive change.",
        options: [
            { letter: "A", text: "Completely Disagree" },
            { letter: "B", text: "Mostly Disagree" },
            { letter: "C", text: "Slightly Disagree" },
            { letter: "C", text: "Slightly Agree" },
            { letter: "C", text: "Mostly Agree" },
            { letter: "C", text: "Completely Agree" },
            
        ]
    },
    {
        question: "I am able to identify specific actions I can take to create positive change.",
        options: [
            { letter: "A", text: "Completely Disagree" },
            { letter: "B", text: "Mostly Disagree" },
            { letter: "C", text: "Slightly Disagree" },
            { letter: "C", text: "Slightly Agree" },
            { letter: "C", text: "Mostly Agree" },
            { letter: "C", text: "Completely Agree" },
            
        ]
    },
     {
        question: "I am able to identify specific actions I can take to create positive change.",
        options: [
            { letter: "A", text: "Completely Disagree" },
            { letter: "B", text: "Mostly Disagree" },
            { letter: "C", text: "Slightly Disagree" },
            { letter: "C", text: "Slightly Agree" },
            { letter: "C", text: "Mostly Agree" },
            { letter: "C", text: "Completely Agree" },
            
        ]
    }
]

const Assessment = () => {
    const [started, setStarted] = useState(false);
    const element = useRef(null);

    const handleKeyDown = (e) => {
        (e.key === 'Enter') && start();
        (e.key === "ArrowDown" || e.key === "ArrowUp") && scroll(e.key);
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e));
        return () => document.removeEventListener('keydown', handleKeyDown);
    });
    
    const start = () => {
        setStarted(true);
    }

    const scroll = (direction) => {
        const position = direction === "ArrowDown" ? 100 : -100
        element.current.scrollBy({ top: position });
    }

    const markAnswer = () => {
        //
        scroll("ArrowDown");
    }

    return (
        <div className={styles.container}>
            <div className={started ? styles.started : styles.content}>
                <h1 className={styles.title}>CHANGE. YOUR. WORLD. MAXWELL TRANSFORMATION TABLES VALUES ASSESSMENT</h1>
                <h3 className={styles.subtitle}>For each of the following statements, select the answer that best describes you. There are no right or wrong answers. Therefore, please answer the questions as you actually are right now (rather than how you think you should be).</h3>
                <span className={styles.buttonContainer}>
                    <button onClick={start} className={styles.button}>BEGIN</button> <span>Press Enter &#8626;</span>
                </span>
                <span className={styles.estimatedTime}>
                    <svg fill="#fff" width="12" height="12" viewBox="0 0 12 12">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6ZM5.99033 2.59455C5.93953 2.31465 5.69455 2.1024 5.4 2.1024C5.06863 2.1024 4.8 2.37103 4.8 2.7024V6.6L4.80967 6.70785C4.86047 6.98775 5.10545 7.2 5.4 7.2H7.8L7.90785 7.19033C8.18775 7.13953 8.4 6.89455 8.4 6.6C8.4 6.26863 8.13137 6 7.8 6H6V2.7024L5.99033 2.59455Z">
                        </path>
                    </svg>
                    Takes 7+ min
                </span>
            </div>

            <div className={!started ? styles.started : styles.assessmentContainer} ref={element}>
                {assessments.map((item, index) => (
                    <div className={styles.assessment} key={index}>
                        <span className={styles.question}><span className={styles.counter}>{index + 1} &rarr;</span> {item.question} *</span>
                        <ul className={styles.optionsContainer}>
                            {item.options.map((item, index) => (<li onClick={markAnswer} className={styles.option} key={index}>
                                <span className={styles.letter}>{item.letter}</span>
                                <span className={styles.answer}>{item.text}</span></li>))
                            }
                        </ul>
                        <button onClick={markAnswer} className={styles.okbutton}>Ok &#10004;</button>
                    </div>
                ))}
            </div>
            {started &&
                <div className={styles.scrollerContainer}>
                    <div className={styles.scrolltop} onClick={() => scroll("ArrowUp")}></div>
                    <div className={styles.scrollbottom} onClick={()=> scroll("ArrowDown")}></div>
                </div>
            }
        </div>
    );
}

export default Assessment;
