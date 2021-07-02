import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ArticleItem from "./ArticleItem";

const useStyles = makeStyles(() => ({
  root: {
    padding: "16px",
    display: "flex",
    width: "100%",
    "& > *": {
      width: "100%",
    },
  },
}));

export default function SavedArticle({ arrayState }) {
  const classes = useStyles();
  const { articleArray } = arrayState;

  return (
    <div className={classes.root}>
      <List component="nav">
        {articleArray.map((item) => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
}
