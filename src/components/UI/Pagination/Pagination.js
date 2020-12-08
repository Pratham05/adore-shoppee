import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';


function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage);
  }

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
