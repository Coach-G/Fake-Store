import React from 'react';


const Item = ({ title, rating, price, image }) => (
  <div className='item-container'>
    <img className='image' src={image} alt='' />
    <div className='rating'> <i class="fa-solid fa-star"></i> {rating.rate}</div>
    <div className='title'>{title}</div>
    <button className='price'>Buy</button>
    
  </div>
);

export default Item;
