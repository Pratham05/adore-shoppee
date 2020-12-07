import React from 'react'
import styles from './CategoryList.module.scss';

const CategoryList = () => {
    return (
        <div className={styles.CategoryList}>
            <h2 className={styles.CategoryList__Heading}>
                categories
            </h2>
            <ul className={styles.CategoryList__List}>
                <li className={styles.CategoryList__List__Item}>First</li>
                <li className={styles.CategoryList__List__Item}>Second</li>
            </ul>
        </div>
    )
}

export default CategoryList
