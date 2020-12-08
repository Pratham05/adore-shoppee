import * as actionTypes from './actionTypes';
import axios from 'axios';
import { categoryInitials } from '../../CONSTANTS';



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

const initCategorySuccess = (initalCategories) => {
    return {
        type: actionTypes.INIT_CATEGORY_SUCCESS,
        initalCategories
    };
};

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

        categoryInitials.forEach(item => {
            console.log("Experiment")
            let count = 0;
            axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/categories?name=' + item.name)
                .then(response => {
                    console.log("resp")
                    item.id = response.data.data[0].id;
                    count++;
                    console.log(categoryInitials)
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