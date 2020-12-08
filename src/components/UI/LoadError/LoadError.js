import React from 'react';
import styles from './LoadError.module.scss';

const LoadError = ({error}) => {
    return (
        <div className={styles.LoadError}>
            <p className={styles.LoadError__Text}>
                {error}
            </p>   
        </div>
    );
};

export default LoadError;
