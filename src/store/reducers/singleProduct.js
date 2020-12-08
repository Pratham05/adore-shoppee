import * as actionTypes from '../actions/actionTypes';

const initialState = {
    product: {},
    loading: false,
    error: false,
    imageSources: []
};

const getFiveImageSet = (images) => {
    return images.slice(0,5).map(image => {
        return image.url_standard;
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCT_START:
            return {
                ...state,
                ...state.product,
                ...state.imageSources,
                loading: true
            }
        
        case actionTypes.LOAD_PRODUCT_FAIL:
            return {
                ...state,
                ...state.product,
                ...state.imageSources,
                loading: false,
                error: true
            }
        
        case actionTypes.LOAD_PRODUCT_SUCCESS:
            const newImgSources = getFiveImageSet(action.productDetails.images);
            return {
                ...state,
                loading: false,
                error: false,
                product: {
                    id: action.productDetails.id,
                    title: action.productDetails.name,
                    description: action.productDetails.description,
                    price: action.productDetails.price,
                    sku: action.productDetails.sku,
                },
                imageSources: newImgSources
            }

        default:
            return state;
    }
};


export default reducer;