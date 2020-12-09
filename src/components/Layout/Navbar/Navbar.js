import React from 'react';
import styles from './Navbar.module.scss'
import Logo from '../../UI/Logo';
import { Link } from 'react-router-dom';

/** 
  * @desc Renders the website navbar
  * Clicking on Logo takes to the home page
  * @returns Styled JSX for the navbar elements
*/
const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__Logo}>
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
