import React, { useEffect } from 'react';
import styles from './FilterPanel.module.scss';
import CategoryList from '../CategoryList';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

/**
 * @desc Renders the Filters for the application for the product list page
 * Accesses redux store for obtaining the details of the included filters
 * Right now only includes category filters
 * Also Initializes the list page on the first load
 * @param {object} props - used for accessing the history prop for routing and the values obtained from store
 */
const FilterPanel = (props) => {

    /**
     * @desc This useeffect works on initial load and only when 
     * the url is changed
     */
    useEffect(() => {
        let query = new URLSearchParams(props.history.location.search);

        // Check if the categories and pages have been included in the query params
        if(query.has('categories')) {
            // Categories Already there 
            if (query.get('categories')) {
                props.initCategory(query.get('categories'));
            } else {
                // No relevant category values
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
    }, [props.history.query]);

    /**
     * @desc This useeffect works for changing the url route
     * whenever a product is loaded
     * Sets the corrsponding categories in the store
     */
    useEffect(() => {
        let query = new URLSearchParams(props.history.location.search);
        let params = new URLSearchParams(query);
        params.set('categories', props.categoryNameString);
        props.history.push('/list?' + params.toString());
    }, [props.categoryNameString]);

    /**
     * @desc Handles click on a particular category 
     * Toggles its state between active/inactve
     * @param index - integer - the index to be toggled in the category array
     */
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
