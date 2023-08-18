import CommentSectionComments from "./CommentSectionComments";
import CommentSectionTextbox from "./CommentSectionTextbox";
import React from "react";

function CommentSection({ currentVideo }) {
  return (
    <div className="CommentSection">
      <CommentSectionTextbox />
      <CommentSectionComments currentVideo={currentVideo} />
    </div>
  );
}

export default CommentSection;
