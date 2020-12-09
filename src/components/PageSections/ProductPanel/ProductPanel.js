import React, { useEffect } from 'react';
import styles from './ProductPanel.module.scss';
import ProductCard from '../../UI/ProductCard';
import Pagination from '../../UI/Pagination';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import { withRouter } from 'react-router-dom';

import Loading from '../../UI/Loading';

import LoadError from '../../UI/LoadError';

/**
 * @desc Renders the product section on the product page 
 * and handles corresponding interactions with store to laod products
 * @param {object} props - used for accessing the history prop for routing and the values obtained from store
 */
const ProductPanel = (props) => {

    // Effect runs whenever the categoryidString, the pages or totalPages props change in the store
    useEffect(()=> {
        props.loadProducts(props.categoryIdString, props.page, props.limit);
    }, [props.categoryIdString, props.page, props.totalPages]);

    const onPageChange = (pageNumber) => {
        let query = new URLSearchParams(props.history.location.search);
        let params = new URLSearchParams(query);
        params.set('page', pageNumber);
        props.history.push('/list?' + params.toString());
        props.changePage(pageNumber);
    }

    /**
     * @desc Handles click of a product
     * Routes to product detail page with id passed in query params
     * @param id - integer - id of the product to be rendered 
     */
    const onProductClickHandler = (id) => {
        // Send to Product Page
        props.history.push('/product?id=' + id);
    };

    let renderCard = null;
    
    // Check for loading and errors
    if (props.loading) {
        renderCard = <Loading/>
    } else {
        if (props.error) {
            renderCard = <LoadError error={"The Products could not be loaded! Please try refreshing the page!"} />
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
                <Pagination
                onPageChangeHandler={onPageChange}
                pageCount={props.totalPages}
                currentPage={props.page}/>
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
        categoryIdString: state.filter.categoryIdString,
        page: state.pagination.page,
        limit: state.pagination.limit,
        totalPages: state.productList.totalPages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProducts: (categoryIdString, page, limit) => dispatch(actions.loadProductList(categoryIdString, page, limit)),
        changePage: (page) => dispatch(actions.changePage(page))
    };
};

// with router gives access to history props 
// and connect, connects to store
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPanel));
