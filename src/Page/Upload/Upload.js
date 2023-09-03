import UploadVideo from "../../Component/Content/UploadVideo";
import React, { useState } from "react";
import UploadTextbox from "../../Component/Content/UploadTextbox";
import PublishButton from "../../Component/Content/PublishButton";
import CancelButton from "../../Component/Content/CancelButton";
import "../../Page/Upload/Upload.scss";

const Upload = () => {
  return (
    <div className="upload__content">
      <h1>Upload Video</h1>
      <div className="upload__thumbnail">
        <p>VIDEO THUMBNAIL</p>
      </div>
      <div className="upload__video">
        <UploadVideo />
      </div>
      <div className="upload__textbox">
        <UploadTextbox />
      </div>
      <div className="upload__btns">
        <PublishButton />
        <CancelButton />
      </div>
    </div>
  );
};

export default Upload;
