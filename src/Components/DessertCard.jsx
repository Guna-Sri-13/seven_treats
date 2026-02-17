import React from 'react';
import dessertstyles from "../Style/DessertCard.module.css";

const DessertCard = ({ item, cart, setCart }) => {

  const addToCart = () => {
    const exists = cart.find(i => i.id === item.id);

    if (exists) {
      const updatedCart = cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (

    <div className={dessertstyles.dessertcard}>
      <img src={item.img} alt={item.name} width="100px;" />

      <div className={dessertstyles.dessertcontent}>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
        <p className={dessertstyles.price}>₹{item.price}</p>
      </div>

      <div className={dessertstyles.dessertbtn}>
        <button onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DessertCard;
