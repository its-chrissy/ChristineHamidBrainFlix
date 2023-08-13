import "./App.scss";
import HeaderNav from "./components/Header/HeaderNav";
import VideoSection from "./components/Content/VideoSection";
import CommentSection from "./components/Content/CommentSection";
import NextVideosSection from "./components/Content/NextVideosSection";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="AppContent">
        <VideoSection />
        <CommentSection />
        <NextVideosSection />
      </div>
    </div>
  );
}

export default App;
