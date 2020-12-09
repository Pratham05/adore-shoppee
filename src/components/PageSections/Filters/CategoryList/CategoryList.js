import React, { useState } from 'react'
import styles from './CategoryList.module.scss';

/**
 * @desc Used for rendering the category list 
 * @param {function} onClickHandler for handling toggles on category click
 * @param {array} categories the array of category objects to be shown on screen
 */
const CategoryList = ({onClickHandler, categories}) => {

    const normalStyle = styles.CategoryList__List__Item;
    const activeStyle = styles.CategoryList__List__Item + " " + styles.CategoryList__Active;

    const renderCategoryList = categories.map((category, index) => {
        return <li 
                onClick={() => onClickHandler(index)}
                key={index} 
                // Value Keeps track of the Button which is pressed
                value={index}
                className={category.isActive ? activeStyle : normalStyle}>
                    {category.name}
               </li>;
    });

    return (
        <div className={styles.CategoryList}>
            <h2 className={styles.CategoryList__Heading}>
                categories
            </h2>
            <ul className={styles.CategoryList__List}>
                { renderCategoryList }
            </ul>
        </div>
    )
}



export default CategoryList;
