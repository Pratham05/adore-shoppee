import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.LoadingContainer}>
            <div className={styles.Loading}>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>  
    );
};

export default Loading;
