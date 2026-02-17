import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navbarstyle from '../Style/Navbar.module.css'

const Navbar = ({cartCount}) => {
  const navigate = useNavigate(); 
  const [open, setOpen] = useState(false);


         let menuClass = navbarstyle.links;

        if (open) { 
            menuClass = navbarstyle.links + " " + navbarstyle.active;
        }
  return (
    <>
      <nav className={navbarstyle.navbar}>
      <div>
      <img src="images/Seven-Treats.png" alt="Seven-Treats" width="150px"/>
      </div>
     {/* Hamburger */}
        <div className={navbarstyle.hamburger} onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
 
      <div className={menuClass}>
        {/* Close Button */}
          <div className={navbarstyle.close} onClick={() => setOpen(false)}>
            &times;
          </div>
        <ul> 
        <li><a href="/home">Home</a></li>
        <li><a href="/pastries">Pastries</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/cupcakes">Cupcakes</a></li>
        <li><a href="/smoothies">Smoothies</a></li>
        <li><a href="/macarons">Macarons</a></li>
        <li><a href="/coffee">Coffee</a></li>
        <li><a href="/cart">Cart ({cartCount})</a></li>
        <li><button onClick={() => {
          localStorage.clear();
          navigate("/");
        }}>Logout</button>
        </li>
        </ul>
      </div>
                {/* Overlay */}
        {open && <div className={navbarstyle.overlay} onClick={() => setOpen(false)}></div>}


      </nav>
    </>
  )
}

export default Navbar
