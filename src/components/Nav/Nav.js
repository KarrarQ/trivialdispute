import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'

const Nav = ( {location} ) => {
    let navLink;
    if (location === 'form') {
      navLink = <Link className="landing-page-link" to="/"><h2>Return Home</h2></Link>
    } else {
      navLink = <Link className="form-link" to="/form"><h2>Add a New Question</h2></Link>
    }
    return (
      <nav className="navbar">
        <h1>Trivial Dispute</h1>
        {navLink}
      </nav>
    )
  }



export default Nav;