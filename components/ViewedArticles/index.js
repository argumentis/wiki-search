import React, { useState } from "react";
import { uid } from "uid";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// components
import Search from "../Search";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
  },
  paperStyle: {
    marginTop: "10%",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "20px",
    width: "140px",
  },
}));

const initialState = {
  value: "",
  active: false,
  options: [],
  loading: false,
};

export default function ViewedArticles({ setArrayState }) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const { value, options } = state;
  const selectedElement = options.find(
    (currentValue) => currentValue.title === value
  );

  const handleAdd = () => {
    const newArticle = {
      id: uid(),
      title: selectedElement.title,
      description: selectedElement.snippet.replace(/\s*\<.*?\>\s*/g, " "),
    };

    // clear optionArray
    setState({ ...state, options: [] });

    //add new article
    setArrayState((prevState) => ({
      articleArray: [newArticle, ...prevState.articleArray],
    }));
  };

  return (
    <div className={classes.root}>
      <Search state={state} setState={setState} />
      {selectedElement && (
        <Paper elevation={3} className={classes.paperStyle}>
          <h2>{selectedElement.title}</h2>
          <Typography>
            {selectedElement.snippet.replace(/\s*\<.*?\>\s*/g, " ")}
          </Typography>
          <Button
            className={classes.button}
            onClick={handleAdd}
            variant="contained"
          >
            add
          </Button>
        </Paper>
      )}
    </div>
  );
}
