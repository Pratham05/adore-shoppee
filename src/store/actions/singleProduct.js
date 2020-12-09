import * as actionTypes from './actionTypes';
import axios from 'axios';

/**
 * This file containes action creators for implementing the loading of a single product
 */

const loadProductStart = () => {
    return {
        type: actionTypes.LOAD_PRODUCT_START
    }
}

const loadProductFail = () => {
    return {
        type: actionTypes.LOAD_PRODUCT_FAIL,
    };
};

/**
 * @desc Creator, dispatches the success of product load and corresponding payload with productdetails
 * @param {Object} productDetails - object of the product details obtained from the server
 */
const loadProductSuccess = (productDetails) => {
    return {
        type: actionTypes.LOAD_PRODUCT_SUCCESS,
        productDetails
    };
};

/**
 * @desc Calls the APi for obtaining the product corresponding to the provided id
 * @param {integer} productId - The id of the product to be obtained from the sevrer 
 */
export const loadProduct = (productId) => {
    return dispatch => {
        dispatch(loadProductStart());
        axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/products/' + productId + '?include=images')
        .then(response => {
            if (response.data.data) {
                // Returns a single product object
                dispatch(loadProductSuccess(response.data.data))
            } else {
                dispatch(loadProductFail());
            }
        }).catch(error => {
            dispatch(loadProductFail());
        })
    }
};