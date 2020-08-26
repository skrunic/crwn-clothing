// Libraries
import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../resources/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Styles
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    
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
            {
                currentUser?
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
                :
                <Link className="option" to="/signin"> SIGN IN </Link>
            }
            <CartIcon />
        </div>
        {
            hidden? null :
            <CartDropdown />
        }
    </div>
)

/**
 * Instead of writing long code state.user.currentUser or state.cart.hidden, we destructure each part of the state relevant for the container
 */
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);