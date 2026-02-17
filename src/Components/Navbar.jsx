import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navbarstyle from '../Style/Navbar.module.css'
import '../Style/Common.module.css'

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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/pastries">Pastries</Link></li>
          <li><Link to="/cookies">Cookies</Link></li>
          <li><Link to="/cupcakes">Cupcakes</Link></li>
          <li><Link to="/smoothies">Smoothies</Link></li>
          <li><Link to="/macarons">Macarons</Link></li>
          <li><Link to="/coffee">Coffee</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
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
