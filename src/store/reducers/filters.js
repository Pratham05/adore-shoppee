import * as actionTypes from '../actions/actionTypes';

import { generateCategoryIdString, 
            generateCategoryString, 
            toggleCategory, 
            copyCategoryList } from './utilities';


const initialState = {
    categoryList: [],
    categoryNameString: "",
    categoryIdString:"",
    error: false,
    loading: false,
}

/**
 * @desc Reducer for changing state values for filters
 * @param {object} state The initial state which the filter values need to be set to
 * @param {object} action Action obtained from the dispatch 
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_CATEGORY:
            const newCategoryList = toggleCategory(state.categoryList, action.changeIndex);
            return {
                ...state,
                categoryList: newCategoryList,
                categoryNameString: generateCategoryString(newCategoryList),
                categoryIdString: generateCategoryIdString(newCategoryList)
            }
        case actionTypes.INIT_CATEGORY_START:
            return {
                ...state,
                categoryList: [...state.categoryList],
                loading: true
            }
        
        case actionTypes.INIT_CATEGORY_FAIL:
            return {
                ...state,
                categoryList: [...state.categoryList],
                loading: false,
                error: true
            }

        case actionTypes.INIT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                categoryList: copyCategoryList(action.initalCategories),
                categoryNameString: generateCategoryString(action.initalCategories),
                categoryIdString: generateCategoryIdString(action.initalCategories)
            }
        default:
            return state;
    }
};



export default reducer;