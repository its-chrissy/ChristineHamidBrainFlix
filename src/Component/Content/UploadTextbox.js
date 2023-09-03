import "../Content/UploadTextbox.scss";
import React from "react";

function UploadTextbox() {
  return (
    <div className="uploadtextbox__section">
      <div className="uploadtextbox__title">
        <p>TITLE YOUR VIDEO</p>
      </div>
      <textarea
        className="uploadtextbox__input"
        placeholder="Add a title to your video"
        cols="53"
        rows="2"
      ></textarea>
      <div className="uploadtextbox__title">
        <p>ADD A VIDEO DESCRIPTION</p>
      </div>
      <textarea
        className="uploadtextbox__input"
        placeholder="Add a title to your video"
        cols="53"
        rows="6"
      ></textarea>
    </div>
  );
}

export default UploadTextbox;
