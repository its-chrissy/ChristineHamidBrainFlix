import React from "react";
import VideoViews from "../Video Section/VideoViews";
import VideoDescription from "../Video Section/VideoDescription";

function VideoSection({ currentVideo }) {
  return (
    <div className="VideoSection">
      <VideoViews video={currentVideo} />
      <VideoDescription video={currentVideo} />
    </div>
  );
}

export default VideoSection;
