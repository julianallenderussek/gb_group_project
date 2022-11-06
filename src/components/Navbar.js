import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function 
() {
  return (
    <ul className='navbar'>
      <li className='navbar-li'>
        <Link className='navbar-link' to="/addresses">Addresses</Link> 
      </li>
      <li className='navbar-li'>
        <Link to="/history">History</Link> 
      </li>
      <li className='navbar-li'>
        <Link to="/reciepts">Reciept</Link> 
      </li>
      <li className='navbar-li'>
        <Link to="/transfer">Transfer</Link> 
      </li>
      <li className='navbar-li'>
        <Link to="/wallet">Wallet</Link> 
      </li>
    </ul>
  )
}
