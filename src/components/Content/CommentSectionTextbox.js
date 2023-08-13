import displayicon from "../../assets/images/Mohan-muruge.jpg";

function CommentSectionTextbox() {
  return (
    <div className="CommentSectionTextbox">
      <div className="CommentSectionTextbox__one">
        <img
          className="CommentSectionTextbox__img"
          alt="display icon"
          src={displayicon}
        />
        <div className="CommentSectionTextbox__title">
          <p>JOIN THE CONVERSATION</p>
        </div>
      </div>
      <div className="CommentSectionTextbox__two">
        <textarea
          className="CommentSectionTextbox__input"
          placeholder="Add a new comment"
          cols="35"
          rows="2"
        ></textarea>
        <div className="CommentSectionTextbox__btn">
          <button>COMMENT</button>
        </div>
      </div>
    </div>
  );
}
export default CommentSectionTextbox;
