import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./Component/Header/HeaderNav";
import Home from "./Page/Home/Home";
import Upload from "./Page/Upload/Upload";
import "./Page/Home/Home.scss";
import "./Page/Upload/Upload.scss";

function App() {
  return (
    <body className="App">
      <HeaderNav />

      {/** Router for SPA */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/upload"} element={<Upload />} />
        <Route path={"/videos/:videoID"} element={<Home />} />
      </Routes>
    </body>
  );
}

export default App;
