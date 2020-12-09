import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalPages: 0,
    productList: [],
    loading: false,
    error: false,
}


/**
 * @desc Reducer for changing state values for product list
 * @param {object} state The initial state which the product list values need to be set to
 * @param {object} action Action obtained from the dispatch 
 */
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCT_LIST_START:
            return {
                ...state,
                productList: [...state.productList],
                loading: true
            }
        
        case actionTypes.LOAD_PRODUCT_LIST_FAIL:
            return {
                ...state,
                productList: [...state.productList],
                loading: false,
                error: true
            }
        
        case actionTypes.LOAD_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productList: action.productData,
                totalPages: action.totalPages
            }
    }
    return state;
};


export default reducer;