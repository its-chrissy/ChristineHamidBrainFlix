import React, { useState } from "react";
import videos from "../../data/videos.json";
import "../../styles/components/NextVideosSection.scss";

function NextVideosSection({ onVideoClick }) {
  const [remainingVideos, setRemainingVideos] = useState(videos);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (clickedVideo) => {
    if (selectedVideo && selectedVideo.id === clickedVideo.id) {
      setSelectedVideo(null);
    } else {
      setSelectedVideo(clickedVideo);
    }
    onVideoClick(clickedVideo);
  };

  const filteredVideos = selectedVideo
    ? remainingVideos.filter((video) => video.id !== selectedVideo.id)
    : remainingVideos;

  return (
    <section>
      <div className="nextvideos">
        <h4>NEXT VIDEOS</h4>
      </div>
      {filteredVideos.map((video) => (
        <div
          className="nextvideos__box"
          key={video.id}
          onClick={() => handleVideoClick(video)}
        >
          <img
            height="70px"
            width="120px"
            className="nextvideos__img"
            src={video.image}
            alt=""
          />
          <div className="nextvideos__info">
            <span className="nextvideos__info-title">{video.title}</span>
            <span className="nextvideos__info-author">{video.channel}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default NextVideosSection;
