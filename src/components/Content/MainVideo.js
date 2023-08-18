import React from "react";

function MainVideo({ video }) {
  return (
    <div className="video">
      <video controls poster={video.image} width={"500px"}>
        <source src={video.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default MainVideo;
