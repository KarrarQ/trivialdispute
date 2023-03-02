import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'

const Nav = ( {location} ) => {
  let navLink;
  if (location === 'home') {
    navLink = <Link className="form-link" to="/form"><h2>Add a New Question</h2></Link>
  }
  const renderDirections = location === 'home' ? <h3 className='directions'>Please choose a category or click "All Categories"</h3> : null;
  
    return (
      <nav className="navbar">
        <Link className="logo-link" to="/">
          <img className="logo" alt="Trivia Night logo"/>
        </Link>
        <div className='nav-directions'>
          {renderDirections}
        </div>
        {navLink}
      </nav>
    )
  }



export default Nav;