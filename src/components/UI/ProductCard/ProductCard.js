import React from 'react';
import styles from './ProductCard.module.scss';
import sampleImage from '../../../assets/images/sampleProduct.jpeg';

const ProductCard = ({img, title, price, sku, onClickHandler, productId}) => {
    return (
        <div className={styles.ProductCard} onClick={onClickHandler} productid={productId}>
            {/* <img src={sampleImage} className={styles.ProductCard__Image}/> */}
            <div className={styles.ProductCard__Description}>
                <h2 className={styles.ProductCard__Heading}>
                    {title}
                </h2>
                <h3 className={styles.ProductCard__Price}>
                    ${price}
                </h3>
                <h3 className={styles.ProductCard__SKU}>
                    SKU - {sku}
                </h3>
            </div>
        </div>
    );
};

export default ProductCard;
