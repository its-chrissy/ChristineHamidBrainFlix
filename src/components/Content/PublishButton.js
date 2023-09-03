import "../../styles/components/Button.scss";
import React, { useState } from "react";
import Notification from "../Content/Notification";

function PublishButton() {
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle the "Publish" button click
  const handlePublishClick = () => {
    // Show the notification
    setShowNotification(true);
  };

  return (
    <div>
      <button className="publishbutton" onClick={handlePublishClick}>
        <p>PUBLISH</p>
      </button>
      {showNotification && <Notification />}
    </div>
  );
}

export default PublishButton;
