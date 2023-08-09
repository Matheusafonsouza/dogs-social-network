import React from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className={styles.header}>
            <nav className="container">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/login" >Login / Register</NavLink>
            </nav>
        </div>
    );
};

export default Header;
