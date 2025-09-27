import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ className = '', showLogin = true }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={`header ${className}`}>
            <div className="logo">
                <Link to="/" onClick={closeMenu}>
                    <h1>BiteOrder</h1>
                </Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className={isActive('/')}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contactos"
                            onClick={closeMenu}
                            className={isActive('/contactos')}
                        >
                            Contactos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sobre"
                            onClick={closeMenu}
                            className={isActive('/sobre')}
                        >
                            Sobre
                        </Link>
                    </li>
                    {showLogin && (
                        <li>
                            <Link
                                to="/login"
                                className={`login-link ${isActive('/login')}`}
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
