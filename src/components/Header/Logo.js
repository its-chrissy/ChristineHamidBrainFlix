import logo from "../../assets/images/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Header">
      <header className="Header__logo">
        <Link to="/">
          <img id="logo" alt="logo" src={logo} />
        </Link>
      </header>
    </div>
  );
}

export default Logo;
