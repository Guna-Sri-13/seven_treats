import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import checkoutstyle from '../Style/Checkout.module.css'

const Checkout = () => {

  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleOrder = () => {

    // Simple validation
    if (!name || !phone || !address || !city || !pincode) {
      alert("Please fill all details");
      return;
    }

    // Clear cart
    localStorage.removeItem("cart");

    // Navigate to success page
    navigate("/success");
  };

  return (
    <>
      <div className={checkoutstyle.checkout}>
        <h2>Checkout</h2>

        <div className={checkoutstyle.form}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Full Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <button onClick={handleOrder}>
            Place Order
          </button>

          <p
            style={{ cursor: "pointer", marginTop: "10px" }}
            onClick={() => navigate("/cart")}
          >
            ~ Back to Cart ~
          </p>

        </div>
      </div>
    </>
  )
}

export default Checkout
