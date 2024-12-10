import navIcon1 from '../assets/img/nav-icon1.svg'; // LinkedIn icon 
import navIconGitHub from '../assets/img/nav-icon-github.svg'; // GitHub icon
import navIconFigma from '../assets/img/nav-icon-figma.svg'; // Figma icon

export const SocialLinks = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.linkedin.com/in/tu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons"
      >
        <img src={navIcon1} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/Danae321"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons"
      >
        <img src={navIconGitHub} alt="GitHub" />
      </a>
      <a
        href="https://www.figma.com/files/team/1288871033980086482/all-projects"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icons"
      >
        <img src={navIconFigma} alt="Figma" />
      </a>
    </div>
  );
};
