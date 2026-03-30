// src/components/Hero/Hero.jsx
import './Hero.css'; 
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import MiFoto from "../../assets/benjamin-eceiza-perfil.png"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        
        {/* COLUMNA IZQUIERDA: CONTENIDO TEXTUAL */}
        <div className="hero__content">
          <h1 className="hero__name">BENJAMÍN ECEIZA</h1>
          <h2 className="hero__title">Desarrollador Frontend</h2>
          <p className="hero__description">
            Especialista en aplicaciones web modernas con React, creando soluciones digitales limpias y eficientes desde San Luis, Argentina.
          </p>
          
          {/* Botones de Acción (Call to Action) */}
          <div className="hero__cta">
            <a href="#proyectos" className="hero__btn hero__btn--primary">Ver mis Proyectos</a>
            <a href="/benjamin_eceiza_cv.pdf" download className="hero__btn hero__btn--secondary">Descargar CV</a>
          </div>

          {/* Iconos Sociales Integrados */}
          <ul className="hero__socials">
            <li><a href="https://github.com/benjaeceiza" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/benjamin-eceiza/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://wa.me/5492657310116" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://instagram.com/benja.eceiza" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="mailto:benjaeceiza400@gmail.com"><FaEnvelope /></a></li>
          </ul>
        </div>

        {/* COLUMNA DERECHA: FOTO Y FONDOS GRÁFICOS */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src={MiFoto} alt="Benjamín Eceiza - Desarrollador Frontend" className="hero__image" />
          </div>
          {/* Contenedor para simular las ondas de fondo */}
          <div className="hero__graphics">
            <div className="hero__graphic-wave hero__graphic-wave--fucsia"></div>
            <div className="hero__graphic-wave hero__graphic-wave--violeta"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;