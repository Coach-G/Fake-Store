import React from 'react';




const Item = ({ title, rating, price, image, handleClick, index}) => (
  <div className='item-container'>
    <img className='image' src={image} alt='' />
    <div className='rating'> <i className="fa-regular fa-star"></i> {rating.rate}</div>
    <div className='title'>{title}</div>
    <button className='price' onClick={() => 
      {handleClick(index)}}>Add to cart</button>
    
  </div>
);

export default Item;
