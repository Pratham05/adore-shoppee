import React from 'react';
import styles from './Navbar.module.scss'
import Logo from '../../Logo';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__Logo}>
                <Logo/>
            </div>
        </nav>
    );
};

export default Navbar;
