import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <h2>My App</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Drawer;