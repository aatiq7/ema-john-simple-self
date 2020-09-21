import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    const vat = ((total*10)/100).toFixed(2);
    const grandTotal = total + parseFloat(vat);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${total.toFixed(2)}</p>
            <p>VAT: ${vat}</p>
            <h3 className="grand-total">Order Total: ${grandTotal.toFixed(2)}</h3>
            <button className="review-button"> <FontAwesomeIcon icon={faShoppingCart} /> Review your order</button>
        </div>
    );
};

export default Cart;