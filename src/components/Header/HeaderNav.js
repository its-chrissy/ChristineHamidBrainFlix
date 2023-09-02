import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import upload from "../../assets/images/Icons/upload.svg";
import Logo from "./Logo";
import Avatar from "../Content/Avatar";
import "../../styles/components/HeaderNav.scss";

function HeaderNav() {
  return (
    <div className="header__nav">
      <Logo />
      <div className="header__nav-box1">
        <div className="header__nav-box2">
          <SearchBar />
          <UploadButton name="Upload" img={upload} />
        </div>
        <div className="header__nav-avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
