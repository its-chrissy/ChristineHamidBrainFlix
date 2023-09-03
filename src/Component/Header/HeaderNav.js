import SearchBar from "../Header/SearchBar";
import UploadButton from "../Header/UploadButton";
import upload from "../../assets/images/Icons/upload.svg";
import Logo from "../Header/Logo";
import Avatar from "../Content/Avatar";
import "../Header/HeaderNav.scss";

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
