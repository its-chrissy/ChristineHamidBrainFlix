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
      <div className="header__nav-box">
        <SearchBar />
        <Avatar />
      </div>
      <UploadButton name="Upload" img={upload} />
    </div>
  );
}

export default HeaderNav;
