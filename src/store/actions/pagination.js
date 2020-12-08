import * as actionTypes from './actionTypes';

export const changePage = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}