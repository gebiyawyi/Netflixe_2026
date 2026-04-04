import { useEffect, useState } from "react";
import axios from "../../pages/utils/axios";
import requests from "../../pages/utils/request";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchAdventure);
        console.log("FULL RESPONSE:", response.data);
        const movies = response.data.results;
        if (movies && movies.length > 0) {
          setMovie(movies[Math.floor(Math.random() * movies.length)]);
        }
      } catch (error) {
        console.log("API ERROR:", error);
      }
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  if (!movie) return <h2>Loading...</h2>;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : `url("https://via.placeholder.com/1500x500?text=No+Image")`,
        backgroundPosition: "center",
        color: "white",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        {/* TITLE */}
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        {/* BUTTONS */}
        <div className="banner_buttons">
          <button className="banner_play">Play</button>
          <button className="banner_mylist">My List</button>
        </div>

        {/* DESCRIPTION */}
        <h2 className="banner_description">{truncate(movie.overview, 150)}</h2>
      </div>

      {/* FADE EFFECT */}
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
