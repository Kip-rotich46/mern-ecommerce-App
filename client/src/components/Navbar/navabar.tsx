import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar-nav bg-body-tertiary '>
        <div className='navbar-brand m-3'>
            <h1 className='text-3xl font-bold text-center'>Protio Shop</h1>
        </div>

        <div className='mb-4 Nav'>
            <Link to='/' className='links'>Shop</Link> 
            <Link to='/purchased-items' className='links'>Purchases</Link> 
            <Link to='/checkout' className='links'><FontAwesomeIcon icon={faShoppingCart} /></Link> 
        </div>
    </div>
  )
}

export default Navbar