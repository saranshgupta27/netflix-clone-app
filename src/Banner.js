import React, { useState, useEffect } from "react";
import request from "./request";
import axios from "./axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(request.Trending);
      setMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );

      return data;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-contents">
        <h1 id="banner-title">{movie.original_title || movie.original_name}</h1>
        <div id="btn-container">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p class="banner-desc">{movie.overview}</p>
      </div>
    </div>
  );
}

export default Banner;