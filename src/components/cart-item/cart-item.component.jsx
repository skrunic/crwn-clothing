import React from 'react';

import './cart-item.styles.scss';

/** 
 * { // item example
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
    }

    (item) => ...                   means we pass the object into function
    ({item}) => ...                 means we extract 'item' from the received object (FALSE; property doesn't exists)
    ({ item: { imageUrl } }) => ... means we extract imageUrl from item; can access it as imageUrl (TRUE; imageUrl exists on item)
*/
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>

        </div>
    </div>
);

export default CartItem;