// This file includes the utility functions for reducers
// Designed specifically for keeping the reducers clean

/**
 * @desc Generates a comma seperated string for category names
 * @param {array} list - Array of category objects
 * @returns {string} A string which contains comma seperated names of the categories
 */
export const generateCategoryString = (list) => {
    return list.filter(item => item.isActive).map(item => item.name).join(',')
};

/**
 * @desc Generates a comma seperated string for category ids
 * @param {array} list - Array of category objects
 * @returns {string} A string which contains comma seperated ids of the categories
 */
export const generateCategoryIdString = (list) => {
    return list.filter(item => item.isActive).map(item => item.id).join(',')
};

/**
 * @desc Toggles the state of a category from Active/Inactive
 * @param {object} oldcategoryList - The list of category objects
 * @param {integer} changeIndex - The index at which category state needs to be updated
 * @returns a new arrray of category objects with the latest states (active/inactive)
 */
export const toggleCategory = (oldcategoryList, changeIndex) => {
    // Update State immutably
    return oldcategoryList.map((category, index) => {
        if ( index === changeIndex ) {
            return { name: category.name, isActive: !category.isActive, id: category.id };
        } 
        return { ...category };
    });
}

/**
 * @desc Used for copying a category list to ensure immutability of state
 * @param {object} oldcategoryList - The list of category objects
 * @returns a new object with the copied details of the old object
 */
export const copyCategoryList = (oldcategoryList) => {
    return oldcategoryList.map(category => {
        return { ...category };
    });
}

/**
 * @desc Extracts image source values from the image objects obtained from the server
 * Selects just the first 5 out of the images obtained
 * @param {array} images - The array of image objects obtained from the server
 * @returns {array} images - an array of image sources to be included in state 
 */
export const getFiveImageSet = (images) => {
    return images.slice(0,5).map(image => {
        return image.url_standard;
    });
};