import React, { useState } from "react";

import "../../styles/components/NextVideosSection.scss";

function NextVideosSection({ onVideoClick, videos }) {
  const [remainingVideos, setRemainingVideos] = useState(videos);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (clickedVideo) => {

    onVideoClick(clickedVideo);
  };

  const filteredVideos = selectedVideo
    ? remainingVideos.filter((video) => video?.id !== selectedVideo.id)
    : remainingVideos;

  return (
    <section>
      <div className="nextvideos">
        <h4>NEXT VIDEOS</h4>
      </div>
      {videos?.map((video) => (
        <div
          className="nextvideos__box"
          key={video?.id}
          onClick={() => handleVideoClick(video)}
        >
          <img
            height="70px"
            width="120px"
            className="nextvideos__img"
            src={video?.image}
            alt=""
          />
          <div className="nextvideos__info">
            <span className="nextvideos__info-title">{video?.title}</span>
            <span className="nextvideos__info-author">{video?.channel}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default NextVideosSection;
