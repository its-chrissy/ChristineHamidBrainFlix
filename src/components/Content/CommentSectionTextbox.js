import Avatar from "../Content/Avatar";
import "../../styles/components/CommentSectionTextbox.scss";
import React from "react";

function CommentSectionTextbox() {
  return (
    <div className="CommentSectionTextbox">
      <div className="CommentSectionTextbox__one">
        <Avatar />
        <div className="CommentSectionTextbox__title">
          <p>JOIN THE CONVERSATION</p>
        </div>
      </div>
      <div className="CommentSectionTextbox__two">
        <textarea
          className="CommentSectionTextbox__input"
          placeholder="Add a new comment"
          cols="35"
          rows="6"
        ></textarea>
        <div className="CommentSectionTextbox__btn">
          <button>COMMENT</button>
        </div>
      </div>
    </div>
  );
}

export default CommentSectionTextbox;
