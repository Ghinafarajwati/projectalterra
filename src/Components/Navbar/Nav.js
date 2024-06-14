import React, { useState } from "react";
import "../Navbar/Navbar.css"
import Logo from "../../Images/Logo.png"
import {HashLink as Link} from "react-router-hash-link"

function Navbar2() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <>
        <nav className='navbar w-screen'>
        <div className="navbar-logo"><img src={Logo}></img></div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#About-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#galerry-home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar2;