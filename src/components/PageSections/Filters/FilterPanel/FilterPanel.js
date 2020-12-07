import React from 'react';
import styles from './FilterPanel.module.scss';
import CategoryList from '../CategoryList';

const FilterPanel = () => {
    return (
        <div className={styles.FilterPanel}>
            <h1 className={styles.FilterPanel__Heading}>
                Filters
            </h1>
            <div className={styles.FilterPanel__Options}>
                <CategoryList />
            </div>
        </div>
    );
};

export default FilterPanel;
