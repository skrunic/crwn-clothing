import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

// dispatch is passed to child (this component) if no mapDispatchToProps is passed in connect()
// Used for one-off state updates
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                (
                    cartItems.map( cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden) // toggleCartHidden is more like a "reaction" when fired because it only inverts existing state
        }}> GO TO CHECKOUT </CustomButton>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// Reason for being able to wrap connect() is that HOCs take components and return modified components
export default withRouter(connect(mapStateToProps)(CartDropdown));