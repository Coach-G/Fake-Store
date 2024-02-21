import React from 'react';

const Item = (props) => (
  <div className='item-container'>
    <div className='rating'> <i className="fa-regular fa-star"></i> {props.rating.rate}</div>
    <img className='image' src={props.image} alt='' />
    <p>${props.price}</p>
    <div className='title'>{props.title}</div>
    <button className='price' onClick={() => props.handleClick(props.id)}>Add to cart</button>
    
  </div>
  
);

export default Item;
