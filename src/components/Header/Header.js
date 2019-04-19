import React from 'react'
import './Header.css'
import { HashRouter, BrowserRouter, NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <HashRouter>
                    <NavLink exact activeClassName="selected" to="/"><i className="fas fa-home"></i> Home </NavLink>
                    <NavLink exact activeClassName="selected" to="/contact"><i className="fas fa-address-book"></i> Contacts</NavLink>
                    <NavLink exact activeClassName="selected" to="/statistics"><i className="fas fa-chart-pie"></i> Charts</NavLink>
                </HashRouter>
            </div>
        </div>
    )
}

export default Header
