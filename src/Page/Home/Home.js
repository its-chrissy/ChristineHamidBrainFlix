import React, { useState, useEffect } from "react";
import MainVideo from "../../Component/Content/Main Video/MainVideo";
import VideoSection from "../../Component/Content/Video Section/VideoSection";
import NextVideosSection from "../../Component/Content/Next Videos Section/NextVideosSection";
import CommentSectionTextbox from "../../Component/Content/CommentSectionTextbox";
import CommentSectionComments from "../../Component/Content/CommentSectionComments";
import axios from "axios";

const Home = () => {
  const API_KEY = "91620a31-7977-48f3-9862-2cdbb7fae846";
  const [currentVideo, setCurrentVideo] = useState();
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getVideoById = async (videoId) => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching video data:", error);
      throw error;
    }
  };

  useEffect(() => {
    // Initialize axios GET request

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/videos`)

      .then(async (response) => {
        // On successful response, set the data

        setVideos(response.data);

        const firstVideoId = response.data[0].id;
        const firstVideoData = await getVideoById(firstVideoId);

        setCurrentVideo(firstVideoData);

        setLoading(false);
        setLoading(false);
      })

      .catch((err) => {
        // Handle any errors

        setError(err);

        setLoading(false);
      });
  }, []);
  async function handleVideoClick(video) {
    const selectedVideo = await getVideoById(video.id);
    console.log(selectedVideo);
    setCurrentVideo(selectedVideo);
  }

  return (
    <div className="AppContent">
      <MainVideo video={currentVideo} />
      <div className="content2">
        <div className="content2__words">
          <VideoSection currentVideo={currentVideo} />
          <CommentSectionTextbox currentVideo={currentVideo} />
          <CommentSectionComments currentVideo={currentVideo} />
        </div>
        <div className="content2__videos">
          <NextVideosSection
            videos={videos}
            currentVideo={currentVideo}
            onVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
