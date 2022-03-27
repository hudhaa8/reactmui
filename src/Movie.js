import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

export function Movie({ name, poster, rating, summary, deleteButton, editButton, id}) {
  const styles = {
    color: rating > 8.5 ? "green" : "red",
  };
  //none-> block - consditional rendering
  const [show, setShow] = useState(true);
  const history= useHistory()

  //conditional styling
  /*  const summaryStyles= {
  display : show ? "block" : "none"}  */
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h1 className="movie-name">
            {" "}
            Movie Name: {name}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="Toggle Summary"
            >
              {/* conditional rendering */}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <IconButton
              onClick={() => history.push(`/movies/${id}`,{id:id})}
              color="primary"
              aria-label="Toggle Summary"
            >
             <InfoIcon />
            </IconButton>
          </h1>
          <h3 className="movie-rating" style={styles}>
            
            ⭐{rating}
          </h3>
        </div>

        {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}

        {/* consditional rendering - preferred*/}
        {show ? <p className="movie-summary"> {summary} </p> : " "}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
