import {Link} from "react-router-dom";

function UploadButton() {
  return (
    <Link to="/upload">
      <button className="upButton">
        <p className="upbutton__p">UPLOAD</p>
      </button>
    </Link>
  );
}

export default UploadButton;
