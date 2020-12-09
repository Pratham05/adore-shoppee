import React from 'react';
import styles from './Loading.module.scss';

/** 
  * @desc Renders Loading animation on the screen
  * @returns JSX to render the styled Loading animation
*/
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
