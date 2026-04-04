import React, { useEffect, useState } from "react";
import axios from "../../../pages/utils/axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
 const handleClick = (movie) => {
   if (trailerUrl) {
     setTrailerUrl("");
   } else {
   
     const searchTerm = movie?.title || movie?.name || movie?.original_name;
     movieTrailer(searchTerm)
       .then((url) => {
         // Extract YouTube video ID from URL
         const urlParams = new URLSearchParams(new URL(url).search);
         const videoId = urlParams.get("v");
         setTrailerUrl(videoId);
       })
       .catch((error) => {
         console.log("No trailer found:", error);
         setTrailerUrl("");
       });
   }
 };

 const opts = {
   width: "100%",
   height: "390px",
   playerVars: {
     autoplay: 1,
   },
 };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
           onClick={() => handleClick(movie)}
            src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}></div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
    
  );
}

export default Rows;
