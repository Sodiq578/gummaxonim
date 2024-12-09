import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegComment } from 'react-icons/fa'; // Import the comment icon
import './Navbar.css';
import Home from "../assets/home.svg";
import User from "../assets/user.svg";

// Navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={Home} alt="home" />
        <span>Home</span>
      </NavLink>
      <NavLink 
        to="/categories" 
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <FaRegComment size={24} /> {/* Use the React Icon here */}
        <span>Comments</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
      >
        <img src={User} alt="profile" />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
