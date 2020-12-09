import { pageLimit } from '../../CONSTANTS';
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    page: 1,
    limit: pageLimit
}


/**
 * @desc Reducer for changing state values for pagination
 * @param {object} state The initial state which the pagination values need to be set to
 * @param {object} action Action obtained from the dispatch 
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            }
        
        default:
            return state;
    }
};

export default reducer;