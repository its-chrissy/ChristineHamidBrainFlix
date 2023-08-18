import React, { useState } from "react";
import HeaderNav from "./components/Header/HeaderNav";
import MainVideo from "./components/Content/MainVideo";
import VideoSection from "./components/Content/VideoSection";
import NextVideosSection from "./components/Content/NextVideosSection";
import CommentSectionTextbox from "./components/Content/CommentSectionTextbox";


import data from "./data/video-details.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(data[0]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="App">
      <HeaderNav />
      <div className="AppContent">
        <MainVideo video={currentVideo} />
        <VideoSection currentVideo={currentVideo} />
        <CommentSectionTextbox />
        <NextVideosSection onVideoClick={handleVideoClick} />
      </div>
    </div>
  );
}

export default App;
