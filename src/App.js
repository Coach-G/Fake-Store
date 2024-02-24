import React, { useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (selectedCategory === "allProducts") {
      return products;
    } else if (selectedCategory === 'Products'){
      return products;
    } else {
      return products.filter((item) => item.category === selectedCategory);}
    
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  function addToCart(id) {
    setCartCount((prev) => prev + 1);

    // setProducts((prevProducts) => {
    //   return prevProducts.filter((item) => {
    //     return item.id !== id;
    //   });
    // });
  }

  // function hasProducts() {
  //   if(filteredList.length > 1) {

  //   }
  // }

  return (
    <div>
      <div className='container'>
        <Cart count={cartCount} />
        <div className='selectButton'>
          <select onChange={handleCategoryChange}>
            <option value='allProducts'>All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
          </select>
        </div>

        
          <div className='card-container'>
            {filteredList.map((allProducts, index) => (
              <Item {...allProducts} key={index} handleClick={addToCart} />
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default App;
