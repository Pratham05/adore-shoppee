/**
 * This file contains the constants that are needed before the application is launched
 * Can be changed according to the Changing requirements
 * Can even be later fetched from the server
 */

/**
 * List of category objects to be included in the application
 * Objects must include name of category which must match the names on server case insensitively
 * default state on first load (Active/Inactive)
 * and the id set to null
 * The Ids will be obtained from the server on first load
 */
export const categoryInitials = [
    { name: "All", isActive: true, id: null },
    { name: "Makeup", isActive: false, id: null },
    { name: "Excessive Oiliness", isActive: false, id: null },
    { name: "Gift-with-purchase", isActive: false, id: null },
    { name: "Aesop", isActive: false, id: null },
];

// The number of products to be shown at a time in the product detail page
export const pageLimit = 30;