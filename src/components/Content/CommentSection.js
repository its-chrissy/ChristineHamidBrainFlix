import CommentSectionComments from "./CommentSectionComments";
import CommentSectionTextbox from "./CommentSectionTextbox";


function CommentSection() {
  return (
    <div className="CommentSection">
      <CommentSectionTextbox />
      <CommentSectionComments />
    </div>
  );
}

export default CommentSection;
