import * as actionTypes from './actionTypes';
import axios from 'axios';

/**
 * This file containes action creators for implementing the loading of products
 * for the product list
 */

const loadProductListStart = () => {
    return {
        type: actionTypes.LOAD_PRODUCT_LIST_START
    }
}

const loadProductListFail = () => {
    return {
        type: actionTypes.LOAD_PRODUCT_LIST_FAIL,
    };
};

/**
 * creator, dispatches success for product load and corresponding payload
 * @param {Array} productData - Array of product objects obtained from the server
 * @param {integer} totalPages - total number of pages according to the given filters
 */
const loadProductListSuccess = (productData, totalPages) => {
    return {
        type: actionTypes.LOAD_PRODUCT_LIST_SUCCESS,
        productData,
        totalPages
    };
};

/**
 * @desc - Calls the API for obtaining the product list according to the provided filters
 * @param {string} categoryIdString - The ids of categories to be included for products
 * @param {integer} page - The page number to be obtained in the request
 * @param {integer} limit - The numer of pages to be obtained on one request
 */
export const loadProductList = (categoryIdString, page, limit) => {
    return dispatch => {
        dispatch(loadProductListStart());
        axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/products?include=images&categories:in=' + categoryIdString + '&page=' + page + '&limit=' + limit)
        .then(response => {
            if (response.data.data.length) {
                dispatch(loadProductListSuccess(response.data.data, response.data.meta.pagination.total_pages))
            } else {
                dispatch(loadProductListFail());
            }
        }).catch(error => {
            dispatch(loadProductListFail());
        })
    }
};