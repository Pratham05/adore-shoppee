import React, { useState } from 'react'
import styles from './CategoryList.module.scss';

import { categoryInitials } from '../../../../CONSTANTS';

const CategoryList = () => {

    const [categoryStates, setCategoryStates] = useState(categoryInitials);

    const normalStyle = styles.CategoryList__List__Item;
    const activeStyle = styles.CategoryList__List__Item + " " + styles.CategoryList__Active;

    const onClickHandler = (event) => {
        // Update State immutably
        const newCategoryStates = categoryStates.map((category, index) => {
            if ( index === event.target.value ) {
                return { name: category.name, isActive: !category.isActive };
            } else {
                // this makes sure the previous category is copied and not directly pointed to
                return { ...category };
            }
        });
        setCategoryStates(newCategoryStates);
    };

    const renderCategoryList = categoryStates.map((category, index) => {
        return <li 
                onClick={onClickHandler}
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

export default CategoryList
