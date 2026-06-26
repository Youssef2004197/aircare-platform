import React from 'react';
import './Navbar.css';
import { User, Bell } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">AirCare<span className="logo-plus">+</span></span>
      </div>
      <div className="navbar-actions">
        <button className="icon-btn"><Bell size={20} /></button>
        <button className="icon-btn"><User size={20} /></button>
      </div>
    </nav>
  );
}

export default Navbar;