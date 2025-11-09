import { useState } from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>

            {/* Logo et titre */}
            <div className='navbar-left'>
                <h1>Smart Greenhouse</h1>
            </div>

            {/* Boutton d'alerte et sélecteur de secteur */}
            <div className="navbar-right">
                <button className="alert-button">
                    <svg className="bell-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                <span>3 Alerts</span>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
                </button>

                {/* Selecteur de secteur */}
                <div className="sector-selector">
                    <label>Sector :</label>
                    <select className="sector-dropdown">
                        <option> Spinach Garden 01</option>
                        <option> Spinach Garden 02</option>
                        <option> Spinach Garden 03</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}