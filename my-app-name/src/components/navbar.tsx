import './navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>

            {/* Logo et titre */}
            <div className='navbar-left'>
                <div className="logo-icon" aria-hidden="true">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.5 6c-10.3 2-18 8.3-22.4 15.1-5.3 8.1-6.8 17.2-3.9 21.1.8 1.1 2.2 2 3.9 2.1C24 44.6 29.7 38 32 31c2.2-6.6 2.7-13.6 2.7-13.6s-1.5 7-5.7 12.8c-2.2 3-4.9 5.3-7.5 6.6-1.5-3.6-.4-10.1 4-15.8 4.5-5.9 11.5-10.5 18.7-12.3.9-.2.7-1.5-.2-1.7Z" fill="#ffffff"/>
                    </svg>
                </div>
                <h1>Greenhouse Monitoring</h1>
            </div>

            {/* Boutton d'alerte et sélecteur de secteur */}
            <div className="navbar-right">
                <button className="alert-button">
                    <svg className="bell-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    <span>3 Alert</span>
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