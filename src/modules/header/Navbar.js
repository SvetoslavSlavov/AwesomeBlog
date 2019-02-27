import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
        <nav className="nav-wrapper blue darker-3">
            <div className="container">
                <a className="brand-logo">{title}</a>
            </div>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add-blog">Add Blog</NavLink></li>
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);
