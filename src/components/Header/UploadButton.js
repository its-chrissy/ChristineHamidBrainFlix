import upload from "../../assets/images/Icons/upload.svg";

function UploadButton() {
  return (
    <button className="UpButton">
      <img className="Upbutton__img" src={upload} alt="UploadButton" />
      <p className="Upbutton__p">UPLOAD</p>
    </button>
  );
}

export default UploadButton;
