import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Pastries from './Pages/Pastries'
import Cookies from './Pages/Cookies'
import Cupcakes from './Pages/Cupcakes'
import Smoothies from './Pages/Smoothies'
import Macarons from './Pages/Macarons'
import Coffee from './Pages/Coffee'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Success from './Pages/Success'

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
        <Route path="/pastries" element={<Pastries cart={cart} setCart={setCart} />} />
        <Route path="/cookies" element={<Cookies cart={cart} setCart={setCart} />} />
        <Route path="/cupcakes" element={<Cupcakes cart={cart} setCart={setCart} />} />
        <Route path="/smoothies" element={<Smoothies cart={cart} setCart={setCart} />} />
        <Route path="/macarons" element={<Macarons cart={cart} setCart={setCart} />} />
        <Route path="/coffee" element={<Coffee cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
