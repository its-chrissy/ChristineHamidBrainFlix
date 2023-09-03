import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/global/Global.scss";

function Notification() {
  const handleRedirectToHome = () => {
 
  };

  return (
    <div className="notification">
      <p>Video Uploaded Successfully!</p>
      <Link className="notification__link" to="/">
        CLICK TO RETURN HOME
      </Link>
    </div>
  );
}

export default Notification;
