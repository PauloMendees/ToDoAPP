import React from "react";
import { makeStyles } from "@mui/styles";
import PageHeader from "../Component/PageHeader/PageHeader";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  boxContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
}));

export default function Sobre() {
  const classes = useStyles();

  return (
    <Box className={classes.boxContent}>
      <PageHeader principal="Home" secondary="Sobre" />
      <Typography variant="h6" component="p">
        Uma simples aplicação voltada para criação, execução e exclusão de
        afazeres.
      </Typography>
      <Typography variant="body2" component="p" sx={{ marginTop: 5 }}>
        Por: Paulo Mendes
      </Typography>
    </Box>
  );
}
