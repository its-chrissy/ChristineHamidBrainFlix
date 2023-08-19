import viewsIcon from "../../assets/images/Icons/views.svg";
import likesIcon from "../../assets/images/Icons/likes.svg";
import "../../styles/components/VideoViews.scss";
import React from "react";


function VideoViews({ video }) {
  return (
    <section>
      <div className="videoviews__title">
        <h2> {video.title}</h2>
      </div>
      <div className="videoviews__box">
        <div className="videoviews__box1">
          <p className="videoviews__box1-channel">By {video.channel}</p>
          <p className="videoviews__box1-timestamp"> {video.timestamp}</p>
        </div>
        <div className="videoviews__box2">
          <p className="videoviews__box2-views">
            <img src={viewsIcon} alt="views icon" />
            {video.views}
          </p>

          <p className="videoviews__box2-likes">
            <img src={likesIcon} alt="likes icon" />
            {video.likes}
          </p>
        </div>
      </div>
    </section>
  );
}
export default VideoViews;
