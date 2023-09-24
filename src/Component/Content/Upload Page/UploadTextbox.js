import "../Upload Page/UploadTextbox.scss";
import React from "react";

function UploadTextbox({title, channel, handleTitleChange, handleChannelChange}) {
  return (
    <div className="uploadtextbox__section">
      <div className="uploadtextbox__title">
        <p>TITLE YOUR VIDEO</p>
      </div>
      <textarea
        className="uploadtextbox__input"
        placeholder="Add a title to your video"
        value={title}
        onChange={handleTitleChange}
        cols="53"
        rows="2"
      ></textarea>
      <div className="uploadtextbox__title">
        <p>ADD A VIDEO DESCRIPTION</p>
      </div>
      <textarea
        className="uploadtextbox__input"
        placeholder="Add a title to your video"
        value={channel}
        onChange={handleChannelChange}
        cols="53"
        rows="6"
      ></textarea>
    </div>
  );
}

export default UploadTextbox;
