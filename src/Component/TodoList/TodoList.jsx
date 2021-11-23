import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  listContent: {
    backgroundColor: "white",
    minHeight: "50vh",
    marginTop: 30,
  },
}));

export default function TodoList() {
  const classes = useStyles();
  return <Box className={classes.listContent}>Teste</Box>;
}
