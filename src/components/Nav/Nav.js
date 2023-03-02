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
          <img className="logo" src={'https://pro2-bar-s3-cdn-cf2.myportfolio.com/91b70d64-0e4f-4ba1-9d15-f71726bcefee/3b861286-cfd4-4743-83ce-4a4e398c23b1.gif?h=f3012916d473f9f456a291e496895cec'} alt="Trivia Night logo"/>
        </Link>
        <div className='nav-directions'>
          {renderDirections}
        </div>
        {navLink}
      </nav>
    )
  }



export default Nav;