import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function TodoForm({ addTask, handdleDrawer }) {
  const [task, setTask] = useState("");

  return (
    <Grid container spacing={3} sx={{ marginTop: 2 }}>
      <Grid item lg={10} md={8} sm={8} xs={7}>
        <TextField
          value={task}
          variant="outlined"
          label="Tarefa"
          fullWidth
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
      </Grid>
      <Grid item lg={2} md={4} sm={4} xs={4}>
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ p: 2 }}
            onClick={(event) => {
              addTask(task);
            }}
          >
            Adicionar
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ p: 2, marginLeft: 1 }}
            onClick={(event) => {
              handdleDrawer();
            }}
          >
            Open
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
