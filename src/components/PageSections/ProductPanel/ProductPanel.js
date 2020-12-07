import React from 'react';
import styles from './ProductPanel.module.scss';
import ProductCard from '../../UI/ProductCard';
import Pagination from '../../UI/Pagination';


const ProductPanel = () => {

    let renderCard = [];

    for (let i = 0; i <50; i++) {
        renderCard = renderCard.concat(<ProductCard key={i}></ProductCard>)
    }
    return (
        <div className={styles.ProductPanel}>
            <div className={styles.ProductPanel__Categories}>
                Categories: <span>Cat1, Cat2, Cat3</span> 
            </div>
            <div className={styles.ProductPanel__Cards}>
                {renderCard}
            </div>
            <div className={styles.ProductPanel__Pagination}>
                <Pagination pageCount={100} onPageChangeHandler={_=>console.log("Hello")}/>
            </div>
        </div>
        
    );
};

export default ProductPanel;
