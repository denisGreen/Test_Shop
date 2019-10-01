import React from 'react';

import Market from './Pages/Market.js'
import Cart from './Pages/Cart.js'
import Login from './Pages/Login.js'
import Header from './Components/Header.js'

import './App.css';




const App = ()=> {
  
  return(
      <div>
        <Header />
        <Login />
        <Market />
        <Cart />
       </div>
    )
}

export default App
