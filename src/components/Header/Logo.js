import logo from "../../assets/images/BrainFlix-logo.svg";

function Logo() {
  return (
    <div className="Header">
      <header className="Header__logo">
        <img id="logo" alt="logo" src={logo} />
      </header>
    </div>
  );
}

export default Logo;
