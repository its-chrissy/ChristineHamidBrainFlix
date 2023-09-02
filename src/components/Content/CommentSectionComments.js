import React from "react";
import Avatar from "../../components/Content/Avatar";
import "../../styles/components/CommentSectionComments.scss";

function CommentSectionComments({ currentVideo }) {
  return (
    <section>
      {currentVideo?.comments.map((comment) => (
        <div className="posted-comments" key={comment.id}>
          <div className="posted-comments__pic">
            <Avatar />
          </div>
          <div>
            <div className="posted-comments__namedate" >
              <div className="posted-comments__name">
                <span>{comment.name}</span>
              </div>
              <div className="posted-comments__timestamp">
                <span>
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="posted-comments__content">
              <span>{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default CommentSectionComments;
