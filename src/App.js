import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main flex-column centered">
        <section className="container flex-column centered">
          <div className="logo" />
          <SocialLinks />
        </section>
        <About />
      </main>
    </div>
  );
}

export default App;
