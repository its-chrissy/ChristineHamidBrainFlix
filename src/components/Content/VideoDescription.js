import videoData from "../../data/video-details.json";
import "../../styles/components/VideoDescription.scss";

function VideoDescription() {
  return (
    <section>
    <div className="video__description">
      <p>{videoData[0].description}</p>
    </div>
    </section>
    
  );
}

export default VideoDescription;
