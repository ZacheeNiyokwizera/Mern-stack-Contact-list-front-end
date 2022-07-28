import React from 'react';
import "./App.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
	
		<ul class="navbar">
			 <li className='logo' >
       <p>Zack Science Group LLC</p>   
      </li>

    <li>
      <Link to="/" style={{ textDecoration: 'none' }}>Dogs</Link>
    </li>
    <li>
      <Link to="/cats" style={{ textDecoration: 'none' }}>Cats</Link>
    </li>
    <li>
      <Link to="/sheeps" style={{ textDecoration: 'none' }}>Add User</Link>
    </li>
    <li>
      <Link to="/goats" style={{ textDecoration: 'none' }}>Goats</Link>
    </li>
    <li>
    <Link to="/users" style={{ textDecoration: 'none' }}>Users</Link>
    </li>

		</ul>
  
    </header>
  );
}
export default Navbar;