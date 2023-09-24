import videothumbnail from "../../../assets/images/Upload-video-preview.jpg";
import "../Upload Page/UploadVideo.scss";

const UploadVideo = () => {
  return (
    <img className="uploadvideo_img" alt="uploadvideo" src={videothumbnail} />
  );
};

export default UploadVideo;
