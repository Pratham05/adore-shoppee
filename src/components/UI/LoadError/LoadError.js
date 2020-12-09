import React from 'react';
import styles from './LoadError.module.scss';


/** 
  * @desc Renders Load error when a loading fails
  * @param {string} error - Passed in props, contains the error message to be displaxed as a string 
  * @returns JSX to render the error message on the middle of the page
*/
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
