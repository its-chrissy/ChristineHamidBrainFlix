import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header/HeaderNav";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import "./styles/components/global/Global.scss";
import "./styles/components/Home.scss"


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
