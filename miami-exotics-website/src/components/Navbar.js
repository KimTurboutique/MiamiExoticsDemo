import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = ()  => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else {
        setButton(true);
      }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            MIAMI EXOTIC RENTALS LOGO HERE <i className='fa-solid fa-car'></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/catalog' className='nav-links' onClick={closeMobileMenu}>
              Catalog
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
              </Link>
          </li>
        </ul>
        <li>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </li>
        </div>
    </nav>  
    </>
  )
}

export default Navbar;