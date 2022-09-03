import facebookIcon from "../assets/Facebook-Icon.png";
import intagramIcon from "../assets/Instagram-Icon.png";
import githubIcon from "../assets/GitHub-Icon.png";
import linkedinIcon from "../assets/Linkedin-Icon.png";
import twitterIcon from "../assets/Twitter-Icon.png";

export default function Footer() {
  return(
    <footer>
      <ul className="media-icons">
        <li><a href="#"><img src={twitterIcon} alt="Twitter icon" /></a></li>
        <li><a href="#"><img src={facebookIcon} alt="Facebook icon" /></a></li>
        <li><a href="#"><img src={intagramIcon} alt="Instagram icon" /></a></li>
        <li><a href="#"><img src={linkedinIcon} alt="Linkedin icon" /></a></li>
        <li><a href="#"><img src={githubIcon} alt="GitHub icon" /></a></li>
      </ul>
    </footer>
  )
}
