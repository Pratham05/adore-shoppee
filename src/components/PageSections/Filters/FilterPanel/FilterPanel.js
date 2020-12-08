import React, { useEffect } from 'react';
import styles from './FilterPanel.module.scss';
import CategoryList from '../CategoryList';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

const FilterPanel = (props) => {

    useEffect(() => {
        
        
        let query = new URLSearchParams(props.history.location.search);
        if(query.has('categories')) {
            // Categories Already there 
            
            if (query.get('categories')) {
                props.initCategory(query.get('categories'));
            } else {
                props.initCategory();
            }
            if (query.has('page') && query.has('limit')) {
                // Pagination already there
            } 
        } else{
            // Default action
            props.initCategory();
        }  
    }, []);

    useEffect(() => {
        props.history.push('/list?categories=' + props.categoryNameString);
    }, [props.categoryNameString]);

    const onCategoryChangeHandler = (index) => {
        props.onCategoryClicked(index);
    };

    return (
        <div className={styles.FilterPanel}>
            <h1 className={styles.FilterPanel__Heading}>
                Filters
            </h1>
            <div className={styles.FilterPanel__Options}>
                <CategoryList 
                    categories={props.categories}
                    onClickHandler={onCategoryChangeHandler}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.filter.categoryList,
        categoryNameString: state.filter.categoryNameString
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCategoryClicked: (changeIndex) => dispatch(actions.toggleCategories(changeIndex)),
        initCategory: (categoryString) => dispatch(actions.initCategory(categoryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterPanel));
