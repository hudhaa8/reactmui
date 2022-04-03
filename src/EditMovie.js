import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import {movieValidationSchema} from "./AddMovie"
// Task
// Form validation on EditMovie
// name- required
// poster-min 4 required
// rating 1-10, required
// summary min 20 char , required
// trailer -min 4, rquired

// const formValidationSchema = yup.object({
//   name: yup.string().required("why not fill this name😀"),

//   poster: yup
//     .string()
//     .required("why not fill this poster😀")
//     .min(4, "need longer"),
//   rating: yup
//    .number().min(1).max(10).required("why not fill this rating😀"),
//   summary: yup
//     .string()
//     .required("why not fill this summary😀")
//     .min(20, "need longer"),
//   trailer: yup
//     .string()
//     .required("why not fill this trailer😀")
//     .min(4, "need longer"),
// });


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
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster:movie.poster,
      rating:movie.rating,
      summary:movie.summary,
      trailer: movie.trailer,
    },
   validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      editMovie(updatedMovie)
    },
  });

  const editMovie=(updatedMovie) => {
    // const updatedMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
    console.log("updated", updatedMovie)
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
  }
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
    <TextField
      label="Name"
      id="name"
      name="name"
      variant="outlined"
      onChange={formik.handleChange}
      value={formik.values.name}
      onBlur={formik.handleBlur}
      error={formik.touched.name && formik.errors.name}
      helperText= {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
    />
    {/* <input />  */}
   
    <TextField
      label="Poster"
      id="poster"
      name="poster"
      variant="outlined"
      onChange={formik.handleChange}
      value={formik.values.poster}
      onBlur={formik.handleBlur}
      error={formik.touched.poster && formik.errors.poster}
      helperText= {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
    />
    {/* <input /> */}
    {formik.touched.poster && formik.errors.poster ? formik.errors.poster: ""}
    <TextField
      label="Rating"
      id="rating"
      name="rating"
      variant="outlined"
      onChange={formik.handleChange}
      value={formik.values.rating}
      onBlur={formik.handleBlur}
      error={formik.touched.rating && formik.errors.rating}
      helperText= {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
    />
    {/* <input /> */}
    {formik.touched.rating && formik.errors.rating ? formik.errors.rating: ""}
    <TextField
      label="Summary"
      id="summary"
      name="summary"
      variant="outlined"
      onChange={formik.handleChange}
      value={formik.values.summary}
      onBlur={formik.handleBlur}
      error={formik.touched.summary && formik.errors.summary}
      helperText= {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}
    />
{formik.touched.summary && formik.errors.summary ? formik.errors.summary: ""}
    <TextField
      label="Trailer"
      id="trailer"
      name="trailer"
      variant="outlined"
      onChange={formik.handleChange}
      value={formik.values.trailer}
      onBlur={formik.handleBlur}
      error={formik.touched.trailer && formik.errors.trailer}
      helperText= {formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
    />
{formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer: ""}
    {/* copy the movielist and add new movie to it */}

    {/* <button  > </button> */}
    <Button
      type="submit"
      variant="contained"
     color="success"
    >
      Save
    </Button>
  </form>
  );
}
