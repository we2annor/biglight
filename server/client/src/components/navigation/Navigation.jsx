import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='navigation'>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
