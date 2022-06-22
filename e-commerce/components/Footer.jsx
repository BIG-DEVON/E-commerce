import React from 'react';
import { AiFillInstagram , AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
    <p> © 2022 Devon All rights reserved. </p>
    <p className='icons'>

    
      <a href='https://www.instagram.com/accounts/login/'> 
    <AiFillInstagram />
    </a>

    <a href='https://twitter.com/Devon5335'>
    <AiOutlineTwitter />
     </a>
    

    </p>
    
    </div>
  )
}

export default Footer