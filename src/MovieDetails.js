import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails({ movieList }) {
  const { id } = useParams(); //useParams extracting parameter from url
  console.log(id, movieList);
  const movie = movieList[id];
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

