import React from 'react';
import styles from './BackButton.module.scss';

const BackButton = () => {
    return (
        <div className={styles.BackButton}>
            <p className={styles.BackButton__Text}>
                &lt; Back to List
            </p>
        </div>
    );
}

export default BackButton;
