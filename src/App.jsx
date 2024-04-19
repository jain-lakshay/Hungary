/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

// Disable right-click and Ctrl + Shift + I shortcut
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'I') { // Ctrl + I
      event.preventDefault();
  }
});

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
< Route path='/' element={<Home/>} />
< Route path='/cart' element={<Cart/>} />
< Route path='/order' element={<PlaceOrder/>} />

      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App