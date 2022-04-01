import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Movie } from "./Movie";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./global";
//const API="https://620aeaff92946600171c5cbc.mockapi.io/movies"
//  ${API}/movies already given so remove movies in api link

//const API="https://620aeaff92946600171c5cbc.mockapi.io"

export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  // Delete movie -> Refresh data
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="movie-list">
      {movieList.map(
        ({ id, name, poster, rating, summary, trailer }, index) => (
          <Movie
            key={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            trailer={trailer}
            deleteButton={
              <IconButton
              style={{marginLeft: "auto"}}
                onClick={() => {
                  deleteMovie(id);
                  /* console.log(index);
                const copyMovieList = [...movieList];
                copyMovieList.splice(index, 1);
                setMovieList(copyMovieList); */
                }}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => history.push(`/movies/edit/${index}`)}
                aria-label="delete"
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
            id={id}
          />
        )
      )}
    </div>
  );
}
