import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  //state- current value
  //setState- helps to update state
  return (
    <div className="counter-container">
      <IconButton
        className="like-dislike"
        onClick={() => setLike(like + 1)}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="like-dislike"
        onClick={() => setdisLike(dislike + 1)}
        aria-label="dislike button"
        color="error"
      >
        <Badge badgeContent={dislike} color="primary">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
