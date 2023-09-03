import videothumbnail from "../../assets/images/Upload-video-preview.jpg";
import "../Content/UploadVideo.scss";

const UploadVideo = () => {
  return (
    <img className="uploadvideo_img" alt="uploadvideo" src={videothumbnail} />
  );
};

export default UploadVideo;
