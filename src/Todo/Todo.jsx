import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import PageHeader from "../Component/PageHeader/PageHeader";

const useStyles = makeStyles((theme) => ({
  boxContent: {
    display: "column",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 25,
  },
}));
export default function Todo() {
  const classes = useStyles();
  return (
    <Box className={classes.boxContent}>
      <PageHeader principal="Home" secondary="ToDo" />
    </Box>
  );
}
