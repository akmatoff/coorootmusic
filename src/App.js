import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Releases from "./components/Releases";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main flex-column centered">
        <Header />
        <section id="home" className="container flex-column centered">
          <div className="logo" />
          <SocialLinks />
        </section>
        <Releases />
        <About />
      </main>
    </div>
  );
}

export default App;
