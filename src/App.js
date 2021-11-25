import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo/Todo";
import TopBar from "./Component/TopBar/TopBar";
import ClippedDrawer from "./Component/Drawer/LateralDrawer";
import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${240}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(true);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <ClippedDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <Main open={mobileOpen}>
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Todo />} />
            <Route exact path="/todo" element={<Todo />} />
            <Route path="/" element={<Todo />} />
          </Routes>
        </Main>
      </Box>
    </BrowserRouter>
  );
}

export default App;
