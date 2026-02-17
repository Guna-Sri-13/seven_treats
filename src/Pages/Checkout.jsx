import React from 'react'
import { useNavigate } from 'react-router-dom'
import checkoutstyle from '../Style/Checkout.module.css'

const Checkout = () => {
   const navigate = useNavigate();
  return (
    <>
    <div className={checkoutstyle.checkout}>
      <h2>Checkout</h2>
      <button onClick={() => {
        localStorage.removeItem("cart");
        navigate("/success");
      }}>Place Order</button>
      <a onClick={() => navigate("/cart")}>
          ~ Back to Cart ~
        </a>
    </div>
    </>
  )
}

export default Checkout
