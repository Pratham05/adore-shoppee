import * as actionTypes from '../actions/actionTypes';


const generateCategoryString = (list) => {
    return list.filter(item => item.isActive).map(item => item.name).join(',')
};

const generateCategoryIdString = (list) => {
    return list.filter(item => item.isActive).map(item => item.id).join(',')
};

const initialState = {
    categoryList: [],
    categoryNameString: "",
    categoryIdString:"",
    error: false,
    loading: false,
}

const toggleCategory = (oldcategoryList, changeIndex) => {
    // Update State immutably
    return oldcategoryList.map((category, index) => {
        if ( index === changeIndex ) {
            return { name: category.name, isActive: !category.isActive, id: category.id };
        } 
        return { ...category };
    });
}

const copyCategoryList = (oldcategoryList) => {
    return oldcategoryList.map(category => {
        return { ...category };
    });
}


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