import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const ErrorView = () => {
    return (
        <div>
            <Navbar></Navbar>
                We are Sorry!
                Unfortunately we could not find the page that you are looking for.
                Please try visiting our <Link to="/">HOME PAGE</Link> 
            <Footer></Footer>
        </div>
    );
};

export default ErrorView;
