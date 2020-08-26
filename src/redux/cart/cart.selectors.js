import { createSelector } from 'reselect';

// "Input selector"
// Function with whole state and returning a slice (1 layer deep usually)
const selectCart = state => state.cart;

// "Output selector"
// Uses input selectors as first argument (array type; output matches order of input selectors)
export const selectCartItems = createSelector(
    [selectCart], // collection of input selectors
    cart => cart.cartItems // function to return value we want from the selector; output order mimics the order of input selectors
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 
        0
    )
);