import Logo from "../../assets/images/BrainFlix-logo.svg";
import SearchBar from "../Header/SearchBar";
import HeaderButton from "../Header/HeaderButton";
import upload from "../../assets/images/Icons/upload.svg";

function HeaderNav() {
  return (
    <div className="HeaderNav">
      <Logo />
      <SearchBar />
      <HeaderButton name="Upload" img={upload} />
    </div>
  );
}

export default HeaderNav;
