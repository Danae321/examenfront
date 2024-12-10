import { useState, useEffect } from "react";  
import { Link } from 'react-router-dom';  // Solo 'Link' es necesario
import logo from '../assets/img/logo.png';
import '../styles/NavBar.css'; // Importa el archivo de estilos

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop Links */}
          <div className="desktop-links">
            <Link
              to="/home"
              className={`menu-item ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Inicio
              </Link>
            <Link
              to="/skills"
              className={`menu-item ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Habilidades
              </Link>
            <Link
              to="/projects"
              className={`menu-item ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Proyectos
              </Link>
            <Link to="/contact">
              <button className="contact-button">Contactanos</button>
            </Link>
          </div>

          {/* Mobile Navbar Toggle */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link
            to="/home"
            className={`menu-item ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => {
              onUpdateActiveLink('home');
              setIsMenuOpen(false);
            }}
          >
            Inicio
            </Link>
          <Link
            to="/skills"
            className={`menu-item ${activeLink === 'skills' ? 'active' : ''}`}
            onClick={() => {
              onUpdateActiveLink('skills');
              setIsMenuOpen(false);
            }}
          >
            Habilidades
            </Link>
          <Link
            to="/projects"
            className={`menu-item ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => {
              onUpdateActiveLink('projects');
              setIsMenuOpen(false);
            }}
          >
            Proyectos
            </Link>
          <Link to="/contact">
            <button
              className="contact-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactanos
            </button>
          </Link>
        </div>
      </nav>
  );
};
