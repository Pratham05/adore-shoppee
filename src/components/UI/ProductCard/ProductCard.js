import React from 'react';
import styles from './ProductCard.module.scss';
import sampleImage from '../../../assets/images/sampleProduct.jpeg';

/** 
  * @desc Renders a Product card for display in the list of products
  * @param {string} title The Title or name of the product
  * @param {integer} price Price of the product
  * @param {string} sku Product sku
  * @param {function} onClickHandler Function to handle click on the product cards
  * @param {integer} productId  Ids of the products to be displayed
*/
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
