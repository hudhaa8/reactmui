import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

// task
// validation on AddMovie
// name- required
// poster-min 4 required
// rating 1-10, required
// summary min 20 char , required
// trailer -min 4, rquired

const formValidationSchema = yup.object({
  name: yup.string().required("why not fill this name😀"),

  poster: yup
    .string()
    .required("why not fill this poster😀")
    .min(4, "need longer"),
  rating: yup
   .number().min(1).max(10).required("why not fill this rating😀"),
  summary: yup
    .string()
    .required("why not fill this summary😀")
    .min(20, "need longer"),
  trailer: yup
    .string()
    .required("why not fill this trailer😀")
    .min(4, "need longer"),
});

export function AddMovie() {
  // const [name, setName] = useState(" ");
  // const [poster, setPoster] = useState(" ");
  // const [rating, setRating] = useState(" ");
  // const [summary, setSummary] = useState(" ");
  // const [trailer, setTrailer] = useState(" ");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
        
      fetch(`${API}/movies/`, {
          method: "POST",
          body: JSON.stringify(newMovie),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => history.push("/movies"));
    },
  });
  const addMovie = (newMovie) => {};
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
        // onClick={() => {
        // const newMovie = {
        //   name: name,
        //   poster: poster,
        //   rating: rating,
        //   summary: summary,
        //   trailer: trailer,
        // };

        // //1. method must be POST
        // // 2. body - JSON data
        // // 3. headers - JSON data
        // // 4. After POST is complete move to /movies
        // fetch(`${API}/movies/`, {
        //   method: "POST",
        //   body: JSON.stringify(newMovie),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }).then(() => history.push("/movies"));

        // setMovieList([...movieList, newMovie]);
        // }}
      >
        Add Movie
      </Button>
    </form>
  );
}
