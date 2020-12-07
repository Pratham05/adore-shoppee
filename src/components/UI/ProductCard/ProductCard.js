import React from 'react';
import styles from './ProductCard.module.scss';
import sampleImage from '../../../assets/images/sampleProduct.jpeg';

const ProductCard = ({img, title, price, sku}) => {
    return (
        <div className={styles.ProductCard}>
            <img src={sampleImage} className={styles.ProductCard__Image}/>
            <div className={styles.ProductCard__Description}>
                <h2 className={styles.ProductCard__Heading}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </h2>
                <h3 className={styles.ProductCard__Price}>
                    $69
                </h3>
                <h3 className={styles.ProductCard__SKU}>
                    SKU: 00837
                </h3>
            </div>
        </div>
    );
};

export default ProductCard;
