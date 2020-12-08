import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
        <NavBar />
            {props.children}
        <Footer />
        </>
    );
};

export default Layout;
