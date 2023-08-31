import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header/HeaderNav";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import "./styles/components/global/Global.scss";

function App() {
  return (
    <body className="App">
      <HeaderNav />

      {/** Router for SPA */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/upload"} element={<Upload />} />
      </Routes>
    </body>
  );
}

export default App;
