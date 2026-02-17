import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import cartstyle from '../Style/Cart.module.css'

const Cart = ({ cart = [], setCart = () => {} }) => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      );
    setCart(updatedCart);
  };

  // Calculate total
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const finalTotal = subtotal - (subtotal * discount) / 100;

  // Apply coupon
  const applyCoupon = () => {
    if (coupon === "WELCOME10") {
      setDiscount(10);
    } else if (coupon === "FLAT50") {
      setDiscount(50);
    } else {
      alert("Invalid Coupon Code");
      setDiscount(0);
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className={cartstyle.cart}>
        {cart.length === 0 ? (
          <h3>Your cart is empty </h3>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className={cartstyle.cartitem}>
                <p>{item.name}</p>
                <p>₹{item.price}</p>

                <div className={cartstyle.qtycontrols}>
                  <button onClick={() => decreaseQty(item.id)}> - </button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}> + </button>
                </div>
              </div>
            ))}

            <hr />

            <h3>Subtotal: ₹{subtotal}</h3>

            {discount > 0 && (
              <h4>Discount Applied: {discount}%</h4>
            )}

            <h2>Total: ₹{finalTotal}</h2>

            {/* Coupon Dropdown */}
            <div className={cartstyle.couponsection}>
              <select
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              >
                <option value="">Select Coupon</option>
                <option value="WELCOME10">
                  Welcome Bonus - 10% OFF
                </option>
                <option value="FLAT50">
                  Flat 50% OFF
                </option>
              </select>

              <button onClick={applyCoupon}>
                Apply Coupon
              </button>
            </div>

            <br />

            <button className={cartstyle.checkout} onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
