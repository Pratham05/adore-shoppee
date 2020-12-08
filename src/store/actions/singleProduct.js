import * as actionTypes from './actionTypes';
import axios from 'axios';


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

const loadProductSuccess = (productDetails) => {
    return {
        type: actionTypes.LOAD_PRODUCT_SUCCESS,
        productDetails
    };
};

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