import { pageLimit } from '../../CONSTANTS';
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    page: 1,
    limit: pageLimit
}



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