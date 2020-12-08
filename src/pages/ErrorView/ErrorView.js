import React from 'react';
import styles from './ErrorView.module.scss';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

const ErrorView = () => {
    return (
        <Layout>
            <div className={styles.ErrorView}>
                <p className={styles.ErrorView__Text}>
                    We are Sorry!
                    Unfortunately we could not find the page that you are looking for.
                    Please try visiting our <Link to="/">HOME PAGE</Link> 
                </p>
            </div>
        </Layout>
    );
};

export default ErrorView;
