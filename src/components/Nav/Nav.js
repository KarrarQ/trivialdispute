import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'

const Nav = ( {location} ) => {
  let navLink;
  if (location === 'home') {
    navLink = <Link className="form-link" to="/form"><h2>Add a New Question</h2></Link>
  }
  const renderDirections = location === 'home' 
  
    return (
      <nav className="navbar">
        <div>
          <Link className="title" to="/">
            <h2>Trivial Dispute</h2>
          </Link>
        </div>
        <div className='nav-directions'>
          {renderDirections}
          {navLink}
        </div>
      </nav>
    )
  }



export default Nav;