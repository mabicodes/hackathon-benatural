import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "./components/home/Home";
import {Main} from "./components/main";
import "./components/main.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
