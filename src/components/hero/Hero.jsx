// src/components/Hero/Hero.jsx
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import MiFoto from "../../assets/benjamin-eceiza-perfil.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container wrapper">
        
        {/* COLUMNA IZQUIERDA: TEXTO Y LLAMADOS A LA ACCIÓN */}
        <div className="hero__content">
          <h1 className="hero__name">BENJAMÍN ECEIZA</h1>
          <h2 className="hero__title">Full Stack Developer</h2>
          <p className="hero__description">
            Desarrollo aplicaciones web escalables con React, Node.js y TypeScript. Enfocado en arquitectura limpia, rendimiento y experiencias de usuario sólidas.
          </p>
          
          <div className="hero__cta">
            <a href="#proyectos" className="hero__btn hero__btn--primary">Ver Proyectos</a>
            <a href="/benjamin_eceiza_cv.pdf" download className="hero__btn hero__btn--secondary">Descargar CV</a>
          </div>

          <ul className="hero__socials" aria-label="Redes de contacto profesional">
            <li>
              <a 
                href="https://github.com/benjaeceiza" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Perfil de GitHub"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/benjamin-eceiza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Perfil de LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a 
                href="mailto:benjaeceiza400@gmail.com" 
                aria-label="Enviar correo electrónico"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA DERECHA: IMAGEN CON GLOW Y DECORACIÓN */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img 
              src={MiFoto} 
              alt="Benjamín Eceiza - Full Stack Developer" 
              className="hero__image"
              loading="eager"
            />
          </div>
          <div className="hero__graphics" aria-hidden="true">
            <div className="hero__graphic-wave hero__graphic-wave--fucsia"></div>
            <div className="hero__graphic-wave hero__graphic-wave--violeta"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;