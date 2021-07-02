import React, { useState } from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  typographyStyle: {
    padding: "2px 32px",
  },
}));

export default function ArticleItem({ item }) {
  const classes = useStyles();
  const [state, setState] = useState({ open: false });
  const { title, description } = item;
  const { open } = state;

  const handleClick = () => {
    setState({ ...state, open: !open });
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography className={classes.typographyStyle} variant="body2">
          {description}
        </Typography>
      </Collapse>
    </div>
  );
}
