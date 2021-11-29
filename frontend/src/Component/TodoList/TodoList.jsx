import { IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const useStyles = makeStyles((theme) => ({
  listContent: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 15,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function TodoList({ tasks, deleteNote, clearNote }) {
  const classes = useStyles();
  return (
    <Box sx={{ marginTop: 3 }}>
      {tasks.map((item, index) => (
        <Box className={classes.listContent} key={index}>
          <Box className={classes.listItem}>
            {item.clear ? (
              <Typography variant="body1" sx={{ color: "#00be20" }}>
                {item.description}
              </Typography>
            ) : (
              <Typography variant="body1">{item.description}</Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <IconButton
                onClick={(event) => {
                  event.preventDefault();
                  deleteNote(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color="primary"
                onClick={(event) => {
                  clearNote(index);
                }}
              >
                <CheckIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
