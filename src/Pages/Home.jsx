import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DessertCard from '../Components/DessertCard';
import desserts from '../Data/desserts';
import homestyle from "../Style/Home.module.css";

const Home = ({ cart = [], setCart = () => {} }) => {
  const [search, setSearch] = useState("");

  const filteredDesserts = desserts.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar cartCount={cart.length} />

      <section className={homestyle.homesection}>

        {/* Search bar */}
        <div className={homestyle.searchcontainer}>
          <input
            type="text"
            placeholder="Search desserts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Dessert Cards Grid */}
        <div className={homestyle.grid}>
          {filteredDesserts.length > 0 ? (
            filteredDesserts.map(item => (
              <DessertCard
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <p>No desserts found</p>
          )}
        </div>

      </section>
    </>
  );
};

export default Home;
