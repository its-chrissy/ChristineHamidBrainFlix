import React from "react";
import "../../styles/components/MainVideo.scss"

function MainVideo({ video }) {
  return (
    <div className="video">
      <video controls poster={video?.image} width={"100%"} height={"100%"}>
        <source src={video?.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default MainVideo;
