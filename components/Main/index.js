import React, { useState } from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
// components
import ViewedArticles from "../ViewedArticles";
import SavedArticle from "../SavedArticle";

const useStyles = makeStyles(() => ({
  root: {
    margin: "16px",
    display: "flex",
    width: "100%",
    minHeight: "95vh",
    "& > *": {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: "16px",
      display: "flex",
    },
  },
  contentBlock: {
    flexBasis: "50%",
  },
}));

export default function Main() {
  const classes = useStyles();
  const [state, setState] = useState({ articleArray: [] });

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classes.contentBlock}>
          <ViewedArticles setArrayState={setState} />
        </div>
        <Divider orientation="vertical" />
        <div className={classes.contentBlock}>
          <SavedArticle arrayState={state} />
        </div>
      </Paper>
    </div>
  );
}
