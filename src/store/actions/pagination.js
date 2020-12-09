import * as actionTypes from './actionTypes';

/**
 * Dispatches Page number provided by the pagination component or during first load
 * @param {integer} page The page number to be changed to
 */
export const changePage = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}