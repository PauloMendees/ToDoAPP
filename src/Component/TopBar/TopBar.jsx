import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  linkContent: {
    textDecoration: "none",
    flexGrow: 1,
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  boxLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [mobileActive, setMobileActive] = useState(false);

  function handleButton() {
    setMobileActive(!mobileActive);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ paddingTop: 1, paddingBottom: 1 }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(event) => {
              event.preventDefault();
              handleButton();
            }}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AssignmentIcon />
            <Typography variant="h5" sx={{ marginLeft: 1 }}>
              TodoAPP
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 15 }} />
          <Box className={classes.boxLink}>
            <Link to="/ToDo" className={classes.linkContent}>
              <Typography variant="body1">ToDo</Typography>
            </Link>
            <Link to="/sobre" className={classes.linkContent}>
              <Typography variant="body1">Sobre</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
