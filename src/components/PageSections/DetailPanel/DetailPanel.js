import React from 'react';
import styles from './DetailPanel.module.scss';

const DetailPanel = ({ title, categories, price, sku, description }) => {
    return (
        <div className={styles.DetailPanel}>
            <h1 className={styles.DetailPanel__Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h1>
            <h2 className={styles.DetailPanel__Categories}>
                Categories: cat1, cat2, cat3
            </h2>
            <h2 className={styles.DetailPanel__Price}>
                $69
            </h2>
            <h2 className={styles.DetailPanel__SKU}>
                SKU - <span>00867</span>
            </h2>
            <p className={styles.DetailPanel__Description}>
            <span>product Details</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
        </div>
    );
};

export default DetailPanel;
