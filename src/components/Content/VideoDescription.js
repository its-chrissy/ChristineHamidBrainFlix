import React from "react";
import videoData from "../../data/video-details.json";
import "../../styles/components/VideoDescription.scss";

function VideoDescription({ video }) {
  const videoDetails = videoData.find((data) => data.id === video.id);

  return (
    <section>
      <div className="video__description">
        <p>{videoDetails.description}</p>
      </div>
      <div>
        <p className="video__description-three">3 comments</p>
      </div>
    </section>
  );
}

export default VideoDescription;
