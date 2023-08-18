import React from "react";
import VideoViews from "./VideoViews";
import VideoDescription from "./VideoDescription";

function VideoSection({ currentVideo }) {
  return (
    <div className="VideoSection">
      <VideoViews video={currentVideo} />
      <VideoDescription video={currentVideo} />
    </div>
  );
}

export default VideoSection;
