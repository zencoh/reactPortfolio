import github from "../img/github-mark-white.png"
import linkedin from "../img/linkedin-mark.png"

function Footer() {
  return (
    <footer>
      <a href="https://github.com/zencoh"><img src={github} alt="GitHub"/></a>
      <a href="https://www.linkedin.com/in/colehartkopp/"><img src={linkedin} alt="LinkedIn"/></a>
    </footer>
  );
}

export default Footer;
