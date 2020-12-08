import React from 'react';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

import ImageViewer from '../components/UI/ImageViewer';

import DetailPanel from '../components/PageSections/DetailPanel';

import BackButton from '../components/UI/BackButton';

const DetailView = () => {

    
    return (
        <div>
            <Navbar></Navbar>
                <BackButton onClickHandler={_=>console.log("Helloe")}></BackButton>
                <DetailPanel></DetailPanel>
            <Footer></Footer>
        </div>
    )
}

export default DetailView
