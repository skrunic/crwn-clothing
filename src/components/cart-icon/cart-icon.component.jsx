import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartsItemCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../resources/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{ itemCount }</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

/*
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
});
*/

// const mapStateToProps = ({ cart: { cartItems } }) => ({
const mapStateToProps = state => ({
    itemCount: selectCartsItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);