import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

/** 
  * @desc Renders the layout for the application
  * Combines the Navbar and the footer and renders the included children in Layout between them
  * @param props - used for getting the children wrapped by Layout component
*/
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
