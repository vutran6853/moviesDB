import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    
  render() {
    return (
      <div>
        <Link to='/'>
          <button>Home</button>
        </Link>

        <Link to='/movies'>
          <button>Movies</button>
        </Link>

        <Link to='/genres'>
          <button>Genres</button>
        </Link>

        <Link to='/tv'>
          <button>TV</button>
        </Link>

      </div>
    );
  }
}

export default NavBar;