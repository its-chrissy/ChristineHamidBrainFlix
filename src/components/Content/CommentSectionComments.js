import React from "react";
import Avatar from "../../components/Content/Avatar";
import comments from "../../data/video-details.json";

function CommentSectionComments({ currentVideo }) {
  console.log(comments);
  
  return (
   < section>
      {currentVideo.comments.map((comments) => (
        <div className="posted-comments">
          <div className="posted-comments__pic">
            <Avatar />
          </div>
          <div>
            <div className="posted-comments__name">
              <span>{comments.name}</span>
            </div>
            <div className="posted-comments__content">
              <span>{comments.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default CommentSectionComments;
