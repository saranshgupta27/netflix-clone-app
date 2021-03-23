import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Row from "./Row";
import request from "./request";
import Navbar from "./Navbar";
function App() {
  return (
    //HeaderNav
    <div className="App">
      <Navbar />
      <Row title="Trending" fetchUrl={request.Trending} />
      <Row title="Top Rated" fetchUrl={request.TopRated} />
      <Row title="Comedy Movies" fetchUrl={request.ComedyMovies} />
      <Row title="Documentaries" fetchUrl={request.Documentaries} />
      <Row title="Horror Movies" fetchUrl={request.HorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={request.RomanticMovies} />
      <Row title="Action Movies" fetchUrl={request.ActionMovies} />
    </div>
  );
}
export default App;
