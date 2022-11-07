import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-[#2874F0] text-white flex justify-between py-5 px-16 items-center cursor-pointer fixed top-0 w-full'>
      <Link to='/'>
        <h1 className='text-2xl'>Flipkart</h1>
      </Link>
      <ul className='flex gap-5 items-center'>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
