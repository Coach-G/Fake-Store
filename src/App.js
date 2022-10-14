import React, { useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [cartCount, setCartCount] = useState(0);
 
  
 useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products)

  function addToCart(id) {
    setCartCount((prev) => prev + 1);
    setProducts(prevProducts => {
      return prevProducts.filter(
        (item, index) => {
          return index !== id
        } 
        )
      });
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  return (
    <div>
      <div className='container'>
        <Cart count={cartCount} />
        <div className='selectButton'>
          <select onChange={handleCategoryChange}>
            <option value=''>All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
          </select>
        </div>

        <div className='card-container'>
          {filteredList.map((element, index) => (
            <Item 
            {...element} 
            key={index} id={index} handleClick={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
