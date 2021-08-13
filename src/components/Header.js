import "./Header.css";

export default function Header() {
  return (
    <header className="header flex-row centered">
      <div className="header-inner flex-row centered">
        <a href="#home">Home</a>
        <a href="#releases">Releases</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}
