import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <p className={styles.Footer__Text}>
                Pratham Bathla - 2020
            </p>
            <p className= {styles.Footer__Disclaimer}>
                Disclaimer: This Website has been made for demonstration purposes only. It is neither developed to make any profits nor is designed for any commercial use. 
            </p>
        </div>
    );
};

export default Footer;
