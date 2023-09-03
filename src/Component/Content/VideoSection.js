import React from "react";
import VideoViews from "../Content/VideoViews";
import VideoDescription from "../Content/VideoDescription";

function VideoSection({ currentVideo }) {
  return (
    <div className="VideoSection">
      <VideoViews video={currentVideo} />
      <VideoDescription video={currentVideo} />
    </div>
  );
}

export default VideoSection;
