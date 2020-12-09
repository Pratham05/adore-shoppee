import * as actionTypes from './actionTypes';
import axios from 'axios';
import { categoryInitials } from '../../CONSTANTS';

/**
 * This file containes action creators for implementing the filters 
 * for the application product list 
 */


/**
 * @desc - Action creator for dispatching to toggle categories
 * @param {integer} changeIndex  - index at which change needs to be made
 */
export const toggleCategories = (changeIndex) => {
    return {
        type: actionTypes.TOGGLE_CATEGORY,
        changeIndex
    };
};



const initCategoryStart = () => {
    return {
        type: actionTypes.INIT_CATEGORY_START
    }
}

const initCategoryFail = () => {
    return {
        type: actionTypes.INIT_CATEGORY_FAIL,
    };
};

/**
 * @desc - Action creator for dispatching init categories as payload and corresponding action
 * when filter load and site initialization is successful
 * @param {object} initalCategories The initial categories to be set for the application
 */
const initCategorySuccess = (initalCategories) => {
    return {
        type: actionTypes.INIT_CATEGORY_SUCCESS,
        initalCategories
    };
};

/**
 * @desc - Initializes the entire app filters in the beginning and on page reload
 * Takes categories from either the passed value or the initial categories defined in constants file
 * If no argument is passed, takes the constant's value
 * @param {string} categoryString contains comma seperated categories to be included in the application
 */
export const initCategory = (categoryString) => {

    if (categoryString) {
        categoryInitials.forEach(item => {
            if(categoryString.includes(item.name)) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        });
    }

    return (dispatch, state) => {
        dispatch(initCategoryStart());

        // Grab the id for each category included
        // Couldn't do this in one request as the API doesnt provide support for filters combining category names
        // Therefore a request is sent for each category
        // Can be improved if backend API provides those filters
        categoryInitials.forEach(item => {
            axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/categories?name=' + item.name)
                .then(response => {
                    console.log("resp")
                    item.id = response.data.data[0].id;
                    // Dispatch a success only when all category ids have been obtained
                    //if (count === categoryInitials.length) {
                        dispatch(initCategorySuccess(categoryInitials));
                    //} 
                }).catch(error => {
                    dispatch(initCategoryFail());
                })
        });
    }
};