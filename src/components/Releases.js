import "./Releases.css";
import releasesData from "../assets/releases.json";

export default function Releases() {
  return (
    <section className="container flex-column centered" id="releases">
      <div className="releases-container flex-row centered">
        {releasesData.map((release) => {
          return (
            <a href={release.link}>
              <div key={release.id} className="release">
                <img className="cover" src={release.cover} alt="cover"></img>
                <div className="flex-column centered release-info">
                  <p id="artist" className="release-text">
                    {release.artist}
                  </p>
                  <p id="title" className="release-text">
                    {release.title}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
