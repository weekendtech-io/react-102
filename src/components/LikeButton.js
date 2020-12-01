import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// css modified from https://codepen.io/merkund/pen/EGpOEr
const useStyles = makeStyles({
  button: {
    "-webkit-appearance": "none",
    background: "linear-gradient(to right,#a2ccb6 0%,#fceeb5 50%,#ee786e 100%)",
    backgroundSize: "500%",
    border: "none",
    borderRadius: "5rem",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    color: "#fff",
    cursor: "pointer",
    font: "1.5em sans-serif",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    height: "5rem",
    letterSpacing: ".05em",
    outline: "none",
    "-webkit-tap-highlight-color": "transparent",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    width: "20rem",
    "&:hover": {
      animationName: "$gradient",
      "-webkit-animation-name": "$gradient",
      "animation-duration": "2s",
      "animation-iteration-count": 1,
      "-webkit-animation-iteration-count": 1,
      "animation-fill-mode": "forwards",
      "-webkit-animation-fill-mode": "forwards",
    },
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "100%": {
      backgroundPosition: "100%",
    },
  },
});

const LikeButton = ({ incrementClickCount }) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    console.log("The Like Button has been pressed.");
    setLiked(!liked);
    incrementClickCount();
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      {liked ? "Liked" : "Not Liked"}
    </button>
  );
};

export default LikeButton;
