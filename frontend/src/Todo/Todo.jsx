import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ModalDrawer from "../Component/ModalDrawer/ModalDrawer";
import PageHeader from "../Component/PageHeader/PageHeader";
import TodoForm from "../Component/TodoForm/TodoForm";
import TodoList from "../Component/TodoList/TodoList";

const useStyles = makeStyles((theme) => ({
  boxContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    display: "flex",
  },
}));

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  function addTask(description) {
    const newTask = [
      ...tasks,
      { id: tasks.length + 1, description: description, clear: false },
    ];
    setTasks(newTask);
  }

  function deleteNote(indice) {
    const tempTasks = [...tasks];
    tempTasks.splice(indice, 1);
    setTasks(tempTasks);
  }

  function clearNote(indice) {
    const clearTask = { ...tasks[indice], clear: true };
    const tempTasks = [...tasks];
    tempTasks.splice(indice, 1);
    const newState = [...tempTasks, clearTask];
    setTasks(newState);
  }

  const [openDrawer, setOpenDrawer] = useState(false);
  function handdleDrawer() {
    setOpenDrawer(!openDrawer);
  }
  const classes = useStyles();
  return (
    <Box className={classes.boxContent}>
      <Box sx={{ flexGrow: 1 }}>
        <PageHeader principal="Home" secondary="ToDo" />
        <TodoForm addTask={addTask} handdleDrawer={handdleDrawer} />
        <TodoList tasks={tasks} deleteNote={deleteNote} clearNote={clearNote} />
      </Box>
      <ModalDrawer openDrawer={openDrawer} handdleDrawer={handdleDrawer} />
    </Box>
  );
}
