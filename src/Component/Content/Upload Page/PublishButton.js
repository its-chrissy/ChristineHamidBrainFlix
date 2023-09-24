import "../Upload Page/Button.scss";
import React, { useState } from "react";
import Notification from "../Upload Page/Notification";
import axios from "axios";

function PublishButton({ title, channel }) {
  const [showNotification, setShowNotification] = useState(false);

  const handlePublishClick = async (e) => {
    e.preventDefault();
    console.log("Publish button clicked");
    const videoData = {
      title,
      channel,
    };

    try {
      console.log(videoData);
      // Posting to localhost:3000/videos

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/videos`,
        videoData
      );

      console.log("Video successfully added:", response.data);
      setShowNotification(true);

      // Reset the form fields if needed
    } catch (error) {
      console.error("An error occurred while adding the video:", error);
    }
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
