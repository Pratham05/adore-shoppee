import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onPageChangeHandler, pageCount }) => {
    return (
        <ReactPaginate
            previousLabel={'PREVIOUS'}
            nextLabel={'NEXT'}
            breakLabel={'....'}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            onPageChange={onPageChangeHandler}
            containerClassName={styles.Pagination}
            previousLinkClassName={styles.Pagination__Link}
            nextLinkClassName={styles.Pagination__Link}
            disabledClassName={styles.Pagination__Link__Disabled}
            activeClassName={styles.Pagination__Link__Active}
        />
    );
};

export default Pagination;
