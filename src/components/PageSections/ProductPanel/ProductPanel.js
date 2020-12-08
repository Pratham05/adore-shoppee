import React, { useEffect } from 'react';
import styles from './ProductPanel.module.scss';
import ProductCard from '../../UI/ProductCard';
import Pagination from '../../UI/Pagination';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import { withRouter } from 'react-router-dom';

import Loading from '../../UI/Loading';

import LoadError from '../../UI/LoadError';


const ProductPanel = (props) => {

    useEffect(()=> {
        props.loadProducts(props.categoryIdString);
    }, [props.categoryIdString]);

    const onProductClickHandler = (id) => {
        // Send to Product Page
        props.history.push('/product?id=' + id);
    };

    let renderCard = null;
    
    if (props.loading) {
        renderCard = <Loading/>
    } else {
        if (props.error) {
            renderCard = <LoadError error={"The Products could not be loaded!"} />
        } else {
            renderCard = props.products.map(product=>{
                return <ProductCard 
                            onClickHandler={() => onProductClickHandler(product.id)}
                            key={product.id} 
                            title={product.name}
                            price={product.price}
                            sku={product.sku}
                       />;
            });
        }
    }
    
    
    return (
        <div className={styles.ProductPanel}>
            <div className={styles.ProductPanel__Categories}>
                Categories: <span>{props.categoryString.split(',').join(' | ')}</span> 
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

const mapStateToProps = state => {
    return {
        products: state.productList.productList,
        loading: state.productList.loading,
        error: state.productList.error,
        categoryString: state.filter.categoryNameString,
        categoryIdString: state.filter.categoryIdString
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProducts: (categoryIdString) => dispatch(actions.loadProductList(categoryIdString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPanel));
