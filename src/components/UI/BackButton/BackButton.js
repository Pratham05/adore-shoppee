import React from 'react';
import styles from './BackButton.module.scss';
import { withRouter } from 'react-router-dom';

/** 
  * @desc Renders a back button for going to the previous page from any given page
  * The click handler is handled in this componenet to make it plug and play anywhere in the application
  * With router gives access to the history props for routing on the web page
  * @returns JSX for the button which is actually a styled paragraph in a div
*/
const BackButton = (props) => {
    /** 
     *@desc Handles click on press of the back button     
     * Moves back to the previous page
    */
    const onClickHandler = () => {
        props.history.goBack();
    }

    return (
        <div className={styles.BackButton}>
            <p onClick={onClickHandler} className={styles.BackButton__Text}>
                &lt; Back to List
            </p>
        </div>
    );
}

// Withrouter gives history props access
export default withRouter(BackButton);
