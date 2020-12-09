import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

/** 
  * @desc Renders the pagination component for the product list
  * Utilizes react-paginate library for obtaining the page component 
  * Custom styles have been implemented to style according to the application
  * @param {function} onPageHandler Handles page click (Must accept a page number as a parameter)
  * @param {integer} pageCount the number of pages to be rendered
  * @param {inteher} currentPage Page number to be set on component load
*/
const Pagination = ({ onPageChangeHandler, pageCount , currentPage}) => {
    return (
        <ReactPaginate
            previousLabel={'PREVIOUS'}
            nextLabel={'NEXT'}
            breakLabel={'....'}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            onPageChange={({ selected: selectedPage }) => onPageChangeHandler(selectedPage+1)}
            containerClassName={styles.Pagination}
            previousLinkClassName={styles.Pagination__Link}
            nextLinkClassName={styles.Pagination__Link}
            disabledClassName={styles.Pagination__Link__Disabled}
            activeClassName={styles.Pagination__Link__Active}
            disableInitialCallback={ true }
            forcePage={currentPage-1}
        />
    );
};

export default Pagination;
