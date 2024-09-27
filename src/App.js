import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App