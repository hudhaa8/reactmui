import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import {API} from "./global"

export function MovieDetails() {

  const { id } = useParams(); //useParams extracting parameter from url
  const [movie, setMovie] = useState({});
 // const API="https://620aeaff92946600171c5cbc.mockapi.io"
  useEffect(() => {
    fetch(
      `${API}/movies/${id}`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovie(mvs));
      //.catch((err)=> console.log(err))
  },[]);

  const history = useHistory();
  return (
    <div>
      <iframe
        width="786"
        height="442"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h1 className="movie-name">{movie.name}</h1>
          <h3 className="movie-rating">⭐{movie.rating}</h3>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
