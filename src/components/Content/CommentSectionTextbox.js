import Avatar from "../Content/Avatar";
import "../../styles/components/CommentSectionTextbox.scss";
import React from "react";

function CommentSectionTextbox() {
  return (
    <div className="commentextbox">
      <div className="commenttextbox__one">
        <div className="commenttextbox__avatar">
          <Avatar />
        </div>
        <div className="commenttextbox__title">
          <p>JOIN THE CONVERSATION</p>
        </div>
      </div>
      <div className="commenttextbox__two">
        <textarea
          className="commenttextbox__input"
          placeholder="Add a new comment"
          cols="42"
          rows="6"
        ></textarea>
        <div className="commenttextbox__btn">
          <button>COMMENT</button>
        </div>
      </div>
    </div>
  );
}

export default CommentSectionTextbox;
