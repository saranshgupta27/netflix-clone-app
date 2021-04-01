import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./search.png";
import search from "./search.png";
function Navbar() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.querySelector(".Navbar").style.backgroundColor = "black";

      if (window.scrollY <= 100) {
        document.querySelector(".Navbar").style.backgroundColor =
          "rgba(255, 255, 255, 0)";
      }
    });
    return () => document.removeEventListener("scroll");
  }, []);

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

      <img id="search" className="nav-img" src={search} alt="Search" />
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
