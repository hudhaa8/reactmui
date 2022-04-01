import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams(); //useParams extracting parameter from url
  /* const movie = movieList[id];
  console.log(movie); */

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovie(mvs));
    //.catch((err)=> console.log(err))
  }, []);

  console.log(movie);

  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}</div>
  );
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      {/* <input />  */}

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      {/* <input /> */}

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />
      {/* <input /> */}

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />

      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />

      {/* copy the movielist and add new movie to it */}

      {/* <button  > </button> */}
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // 1. method must be PUT & pass id
          // 2. body - JSON data
          // 3. headers - JSON data
          // After PUT is complete ->  movie to /movies
          fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => history.push("/movies"));
          /* const copyMovieList = [...movieList];
          copyMovieList[id] = updatedMovie;
          setMovieList(copyMovieList);
          history.push("/movie"); */
        }}
      >
        Save
      </Button>
    </div>
  );
}
