import React from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import ImageViewer from '../components/UI/ImageViewer';

import DetailPanel from '../components/PageSections/DetailPanel';
 

const DetailView = () => {

    
    return (
        <div>
            <Navbar></Navbar>
                <ImageViewer></ImageViewer>
                <DetailPanel></DetailPanel>
            <Footer></Footer>
        </div>
    )
}

export default DetailView
