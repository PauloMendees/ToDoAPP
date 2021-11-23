import { Breadcrumbs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  linkContent: {
    fontSize: 30,
    fontWeight: "700",
    color: "#006eff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  typContent: {
    fontSize: 20,
    fontWeight: "700",
    color: "#414141",
    textDecoration: "none",
    marginTop: 25,
  },
}));

export default function PageHeader({ principal, secondary }) {
  const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" to="/" className={classes.linkContent}>
          {principal}
        </Link>
        <p className={classes.typContent}>{secondary}</p>
      </Breadcrumbs>
    </Box>
  );
}
