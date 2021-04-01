import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Row from "./Row";
import request from "./request";
import Navbar from "./Navbar";
import Banner from "./Banner";
function App() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.querySelector(".Navbar").style.backgroundColor = "black";
      if (window.scrollY === 0) {
        document.querySelector(".Navbar").style.backgroundColor =
          "rgba(255, 255, 255, 0)";
      }
    });
  });
  document.title = "Netflix-Clone";
  return (
    //HeaderNav
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending" fetchUrl={request.Trending} isbig={true} />
      <Row title="Continue Watching for User" fetchUrl={request.TopRated} />
      <Row title="Comedy Movies" fetchUrl={request.ComedyMovies} isbig={true} />
      <Row
        title="Documentaries"
        fetchUrl={request.Documentaries}
        isbig={true}
      />
      <Row title="Horror Movies" fetchUrl={request.HorrorMovies} />
      <Row
        title="Romantic Movies"
        fetchUrl={request.RomanticMovies}
        isbig={true}
      />
      <Row title="Action Movies" fetchUrl={request.ActionMovies} />
    </div>
  );
}
export default App;
