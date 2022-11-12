import React from 'react';


export default function Cart(props) {

    return (
        <div className='cart'><i className="fa-solid fa-cart-shopping"></i> {props.count}</div>
    )
}
