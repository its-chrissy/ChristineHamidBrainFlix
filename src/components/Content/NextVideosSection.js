import React, { useState } from "react";
import videos from "../../data/videos.json";

function NextVideosSection({ onVideoClick }) {
  const [remainingVideos, setRemainingVideos] = useState(videos);

  const handleVideoClick = (clickedVideo) => {
    const updatedVideos = remainingVideos.filter(
      (video) => video.id !== clickedVideo.id
    );
    setRemainingVideos(updatedVideos);
    onVideoClick(clickedVideo);
  };

  return (
    <section>
      <div className="nextvideos">
        <h4>NEXT VIDEOS</h4>
      </div>
      {remainingVideos.map((video) => (
        <div
          className="nextvideos__box"
          key={video.id}
          onClick={() => handleVideoClick(video)}
        >
          <img
            height="70px"
            width="100px"
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
