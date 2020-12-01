import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  clickCounter: {
    color: "grey",
  },
});
const ClickCounter = ({ likeButtonClickCount }) => {
  const classes = useStyles();
  return <div className={classes.clickCounter}>{likeButtonClickCount}</div>;
};

export default ClickCounter;
