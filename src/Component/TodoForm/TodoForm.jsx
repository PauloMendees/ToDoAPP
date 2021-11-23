import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function TodoForm({ AdicionarTarefa }) {
  const [task, setTask] = useState("");
  const [hidden, setHidden] = useState(false);

  function handleHidden() {
    setHidden(!hidden);
  }

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
        {!hidden ? (
          <Button
            variant="contained"
            fullWidth
            sx={{ p: 2 }}
            onClick={(event) => {
              event.preventDefault();
              AdicionarTarefa(task);
            }}
          >
            Adicionar
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
}
