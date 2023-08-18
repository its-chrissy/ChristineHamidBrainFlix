
import comments from "../../data/video-details.json";
import Avatar from "../../components/Content/Avatar";

function CommentSectionComments({ currentVideo }) {
  console.log(comments);
  return (
    <section>
      {currentVideo.comments.map((comments) => (
        <div className="commentssection">
          <div className="commentssection__avatar">
            <Avatar />
          </div>
          <div>
            <div className="commentssection__name">
              <span>{comments.name}</span>
            </div>
            <div className="commentssection__comment">
              <span>{comments.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CommentSectionComments;
