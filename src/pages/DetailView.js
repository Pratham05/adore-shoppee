import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';

import ReactPaginate from 'react-paginate';


const constArray = [];
    for(let i= 0; i < 100; i ++) {
        constArray.push(<div key={i}>I am {i}</div>);
 }


let renderComp = [];

let currentPage = 0;

const DetailView = () => {

    const [sample, s] = useState(0);

    const pageCount = 10;

    useEffect(()=>{
        renderComp = renderComp.concat(constArray.slice(currentPage*pageCount,  currentPage*pageCount + pageCount));
    });

    const handlePageClick = () => {
        currentPage++;
        s({});
    }

    return (
        <div>
            {renderComp}
            <ReactPaginate
             previousLabel={'previous'}
             nextLabel={'next'}
             breakLabel={'...'}
             breakClassName={'break-me'}
             pageCount={pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange={handlePageClick}
             containerClassName={'pagination'}
             subContainerClassName={'pages pagination'}
             activeClassName={'active'}
            />
        </div>
    )
}

export default DetailView
