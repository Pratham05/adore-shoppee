import React from 'react';
import styles from './ProductDetails.module.scss';

const ProductDetails = ({ title, price, sku, description, categories }) => {
    return (
        <div className={styles.ProductDetails}>
            <h1 className={styles.ProductDetails__Title}>
                {title}
            </h1>
            <h2 className={styles.ProductDetails__Categories}>
                Categories: {categories}
            </h2>
            <h2 className={styles.ProductDetails__Price}>
                ${price}
            </h2>
            <h2 className={styles.ProductDetails__SKU}>
                SKU - <span>{sku}</span>
            </h2>
            <p className={styles.ProductDetails__Description}>
                <span>product Details</span>
                {description}
            </p>
        </div>
    );
};

export default ProductDetails;
