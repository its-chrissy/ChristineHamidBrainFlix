import Video from "./Video";
import VideoViews from "./VideoViews";
import VideoDescription from "./VideoDescription";

function VideoSection() {
  return (
    <div className="VideoSection">
      <Video />
      <VideoViews />
      <VideoDescription />
    </div>
  );
}

export default VideoSection;
