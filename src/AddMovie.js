import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [trailer, setTrailer] = useState(" ");
  const history= useHistory()

  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined" />
      {/* <input />  */}

      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined" />
      {/* <input /> */}

      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined" />
      {/* <input /> */}

      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined" />

      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined" />

      {/* copy the movielist and add new movie to it */}

      {/* <button  > </button> */}
      <Button
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          setMovieList([...movieList, newMovie]);
          history.push("movies")
        }}
      >
        Add Movie
      </Button>
    </div>
  );
}
