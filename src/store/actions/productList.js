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

const loadProductListSuccess = (productData, totalPages) => {
    return {
        type: actionTypes.LOAD_PRODUCT_LIST_SUCCESS,
        productData,
        totalPages
    };
};

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