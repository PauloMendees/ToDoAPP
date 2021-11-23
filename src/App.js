import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo/Todo";
import TopBar from "./TopBar/TopBar";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route path="/" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
