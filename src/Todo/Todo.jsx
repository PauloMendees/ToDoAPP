import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import PageHeader from "../Component/PageHeader/PageHeader";
import TodoForm from "../Component/TodoForm/TodoForm";
import TodoList from "../Component/TodoList/TodoList";

const useStyles = makeStyles((theme) => ({
  boxContent: {
    display: "column",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 25,
    backgroundColor: "#f3f3f3",
    minHeight: "94vh",
  },
}));

function AdicionarTarefa(task) {
  console.log(task);
}

export default function Todo() {
  const classes = useStyles();
  return (
    <Box className={classes.boxContent}>
      <PageHeader principal="Home" secondary="ToDo" />
      <TodoForm AdicionarTarefa={AdicionarTarefa} />
      <TodoList />
    </Box>
  );
}
