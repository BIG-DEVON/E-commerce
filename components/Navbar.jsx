
import React from 'react';
import Link from 'next/link';
import { AiFillApple, AiFillPicture, AiFillProfile, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import { useState } from 'react';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
 


  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Devon's Store</Link>
      </p>

      {/* <div className='navbar-container'> <input type="text" placeholder='Search...'  onChange/> </div> */}
      
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      
        <AiOutlineShopping />
      
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar