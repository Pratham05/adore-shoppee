import React from 'react';
import styles from './BackButton.module.scss';
import { withRouter } from 'react-router-dom';

const BackButton = (props) => {


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

export default withRouter(BackButton);
