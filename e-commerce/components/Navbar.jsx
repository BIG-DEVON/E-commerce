import React from 'react';
import Link from 'next/link'
import{ AiOutlineShopping, AiOutlineShop }  from 'react-icons/ai';



const Navbar = () => {
  return (

    <div className='navbar-container'>
    <p className='logo'>
      <Link href="/"> Devon's Headphones</Link>
</p>

    <button type='button'
    className='cart-icon'
    onClick="">
    <AiOutlineShopping/>
    <span className='cart-item-qty'> 1</span>
     </button>
    </div>
  )
}

export default Navbar;