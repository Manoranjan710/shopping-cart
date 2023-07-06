import 'tailwindcss/tailwind.css';
import './App.css';
import React from 'react';
import {  Route, Routes,  useNavigate, createSearchParams } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Products from './pages/products/products';
import Product from './pages/product/product';
import Cart from './pages/cart/Cart';
import NotFound from './pages/not-found/not-found';
import { useCart } from './Context/Cart';

function App() {

  const navigate = useNavigate();
  const {cartItemCount} = useCart();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
      <div>
        <NavBar  onSearch={onSearch} cartItemCount={cartItemCount()} />
        <Routes>
          <Route path='/' element={<Products />} exact />
          <Route path='/product/:productId' element={<Product/>}  />
          <Route path='/cart' element={ <Cart/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
      </div> 
  );
}

export default App;
