import React from "react";

import "../Content/VideoDescription.scss";

function VideoDescription({ video }) {
  return (
    <section>
      <div className="video__description">
        <p>{video?.description}</p>
      </div>
      <div>
        <p className="video__description-three">3 Comments</p>
      </div>
    </section>
  );
}

export default VideoDescription;
