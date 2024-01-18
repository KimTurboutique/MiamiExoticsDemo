import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            MIAMI EXOTIC RENTALS LOGO HERE
        </Link>
        <div className='menu-icon'>
          
        </div>
        </div>
    </nav>  
    </>
  )
}

export default Navbar