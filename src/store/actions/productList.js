import * as actionTypes from './actionTypes';
import axios from 'axios';

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

const loadProductListSuccess = (productData) => {
    return {
        type: actionTypes.LOAD_PRODUCT_LIST_SUCCESS,
        productData
    };
};

export const loadProductList = (categoryIdString) => {
    return dispatch => {
        dispatch(loadProductListStart());
        axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/products?include=images&categories:in=' + categoryIdString)
        .then(response => {
            if (response.data.data.length) {
                dispatch(loadProductListSuccess(response.data.data))
            } else {
                dispatch(loadProductListFail());
            }
        }).catch(error => {
            dispatch(loadProductListFail());
        })
    }
};