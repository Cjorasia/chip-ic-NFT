import React from "react";
import "./Header.css";

import logo from "../assets/header/logo.png";
import searchIcon from "../assets/header/search.png";
import themeIcon from "../assets/header/theme-switch.png";

const Header = () => {
 return (
  <div className='header'>
   <div className='logoContainer'>
    <img src={logo} className='chipicLogo' alt='Chip-IC Logo' />
   </div>

   <div className='searchBar'>
    <div className='searchBarIcon'>
     <img src={searchIcon} alt='?' />
    </div>
    <input className='searchInput' placeholder='collection, item or user' />
   </div>

   <div className='headerItems'>
    <p>drop</p>
    <p>marketplace</p>
    <p>create</p>
   </div>

   <div className='headerActions'>
    <div className='themeSwithcContainer'>
     <img src={themeIcon} alt='' />
    </div>
   </div>

   <div className='loginButton'>GET IN</div>
  </div>
 );
};

export default Header;
