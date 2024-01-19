import React from 'react'
import './Navbar.css';

//importing images
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';

const Navbar = () => {
  return (
    <div className='navbar flex'>
      <div className="nav-logo">
        <img src={logo} alt="Main Logo" />
        <p>ShoPPer.Lk</p>
      </div>

      <ul className='nav-menu'>
        <li>Shop<hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Logo" />
        <div className="nav-cart-count">0</div>
      </div>


      
    </div>
  )
}

export default Navbar
