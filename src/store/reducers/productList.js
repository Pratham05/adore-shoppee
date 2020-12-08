import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productList: [],
    loading: false,
    error: false
}



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
                productList: action.productData
            }
    }
    return state;
};


export default reducer;