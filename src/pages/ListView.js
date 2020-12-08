import React from 'react';

import NavBar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer'

import FilterPanel from '../components/PageSections/Filters/FilterPanel';
import ProductPanel from '../components/PageSections/ProductPanel';

const ListView = () => {
    return (
        <>
        <NavBar></NavBar>
        <div style={{padding: "2rem"}}>
        
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{width: "24%"}}>
          <FilterPanel></FilterPanel>
          </div>
    
          <div style={{width: "73%"}}>
          <ProductPanel></ProductPanel>
          </div>
          
          
        </div>
        
        </div>
        <Footer></Footer> 
        </>
    );
};

export default ListView;
