import UploadVideo from "../../components/Content/UploadVideo";
import React, { useState } from "react";
import UploadTextbox from "../../components/Content/UploadTextbox";
import PublishButton from "../../components/Content/PublishButton";
import CancelButton from "../../components/Content/CancelButton";
import "../../styles/components/global/Global.scss";
import "../../styles/components/Upload.scss";

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
