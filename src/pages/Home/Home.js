import React, { useState, useEffect } from "react";
import MainVideo from "../../components/Content/MainVideo";
import VideoSection from "../../components/Content/VideoSection";
import NextVideosSection from "../../components/Content/NextVideosSection";
import CommentSectionTextbox from "../../components/Content/CommentSectionTextbox";
import CommentSectionComments from "../../components/Content/CommentSectionComments";
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

      return response.data; // Assuming the API returns the video data in the response's "data" field
    } catch (error) {
      console.error("Error fetching video data:", error);
      throw error; // Re-throw the error if you want to handle it upstream
    }
  };

  useEffect(() => {
    // Initialize axios GET request

    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)

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
  }, []); // Empty dependency array means
  async function handleVideoClick(video) {
    // code will go here

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
