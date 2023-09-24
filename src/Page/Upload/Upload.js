import UploadVideo from "../../Component/Content/Upload Page/UploadVideo";
import React, { useState } from "react";
import UploadTextbox from "../../Component/Content/Upload Page/UploadTextbox";
import PublishButton from "../../Component/Content/Upload Page/PublishButton";
import CancelButton from "../../Component/Content/Upload Page/CancelButton";
import "../../Page/Upload/Upload.scss";

const Upload = () => {
  const [title, setTitle] = useState("");

  const [channel, setChannel] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChannelChange = (e) => {
    setChannel(e.target.value);
  };

  const handleReset = () => {
    setTitle("");
    setChannel("");
  };

  return (
    <div className="upload__content">
      <h1>Upload Video</h1>
      <div className="upload__thumbnail">
        <p>VIDEO THUMBNAIL</p>
      </div>
      <div className="upload__video">
        <UploadVideo
          title={title}
          channel={channel}
          handleTitleChange={handleTitleChange}
          handleChannelChange={handleChannelChange}
        />
      </div>
      <div className="upload__textbox">
        <UploadTextbox />
      </div>
      <div className="upload__btns">
        <PublishButton title={title} channel={channel} />
        <CancelButton />
      </div>
    </div>
  );
};

export default Upload;
