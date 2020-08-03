// Libraries
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../resources/crown.svg';

// Styles
import './header.styles.scss';

const Header = ({ name, price, imageUrl }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;