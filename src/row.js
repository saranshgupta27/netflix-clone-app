import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isbig }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getapi() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    getapi();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1 className="row-title">{title}</h1>
      <div className="tiles">
        {movies.map((movies) => (
          <img
            key={movies.id}
            className={`tile-img ${isbig && "tile_Large"}`}
            src={`${baseUrl}${
              isbig ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
