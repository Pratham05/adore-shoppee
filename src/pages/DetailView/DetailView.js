import React from 'react';
import styles from './DetailView.module.scss';

import Layout from '../../components/Layout';

import DetailPanel from '../../components/PageSections/DetailPanel';

import BackButton from '../../components/UI/BackButton';

const DetailView = () => {
    return (
        <Layout>
            <div className={styles.DetailView__BackButtton}>
                <BackButton />
            </div>
            <DetailPanel></DetailPanel>
        </Layout>
    );
};


export default DetailView;
