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
            if (query.has('page')) {
                // Pagination already there
                if(query.get('page')) {
                    props.changePage(parseInt(query.get('page')));
                } 
            } 
        } else{
            // Default action
            props.initCategory();
        }  
    }, [props.history.location.search]);

    useEffect(() => {
        let query = new URLSearchParams(props.history.location.search);
        let params = new URLSearchParams(query);
        params.set('categories', props.categoryNameString);
        props.history.push('/list?' + params.toString());
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
        initCategory: (categoryString) => dispatch(actions.initCategory(categoryString)),
        changePage: (pageNo) => dispatch(actions.changePage(pageNo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterPanel));
