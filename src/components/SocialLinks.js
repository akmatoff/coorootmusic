import {
  FaSoundcloud,
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaVk,
} from "react-icons/fa";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <section className="social-links flex-row">
      <a href="https://soundcloud.com/coorootmusic">
        <FaSoundcloud className="social-icon" />
      </a>
      <a href="https://cooroot.trac.co/coorootmusic">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://open.spotify.com/artist/3S8va2acp3V46So5f99qqz">
        <FaSpotify className="social-icon" />
      </a>
      <a href="https://facebook.com/coorootmusic">
        <FaFacebook className="social-icon" />
      </a>
      <a href="https://vk.com/coorootmusic">
        <FaVk className="social-icon" />
      </a>
    </section>
  );
}
