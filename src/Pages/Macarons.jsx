import React, { useState } from 'react'
import DessertCard from '../Components/DessertCard'
import Navbar from '../Components/Navbar'
import desserts from '../Data/desserts'
import dessert from '../Style/Item.module.css'

const Macarons = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");

  const filteredDesserts = desserts
    .filter(item => item.category === "macarons")
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className={dessert.searchcontainer}>
        <input
          type="text"
          placeholder="Search macarons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={dessert.grid}>
        {filteredDesserts.map(item => (
          <DessertCard
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  )
}


export default Macarons
