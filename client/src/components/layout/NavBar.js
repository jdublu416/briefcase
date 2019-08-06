import React from 'react';
import {Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='material-icons'>business_center</i> 
            {' '} BriefCase
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/jobs'>Jobs</Link>
          </li>
          <li>
          <Link to='/register'>Register</Link>
          </li>
          <li>
          <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
