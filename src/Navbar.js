import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <img
        id="logo"
        className="nav-img"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <ul id="menu-text">
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      <img
        id="search"
        className="nav-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--W18wy6a2ieVL6AoUwTx7OwzuY1-ncqVeA&usqp=CAUg"
        alt="Search"
      />
      <img
        id="p-pic"
        className="nav-img"
        src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
        alt="Profile Pic"
      />
    </div>
  );
}

export default Navbar;
