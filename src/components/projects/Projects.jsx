// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// ARRAY DE DATOS
const misProyectos = [
  {
    id: 1,
    titulo: "Sistema de Reservas - Barbería (En Desarrollo)",
    descripcion: "Aplicación Full-Stack para gestión de turnos, portafolio de staff y disponibilidad horaria. Implementación con schemas Mongoose.",
    tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1789687821/screen-kathara_jzqrku.png", 
    repoLink: "", 
    demoLink: "https://kathara-five.vercel.app/" 
  },
  {
    id: 2,
    titulo: "Sanación Cosmotelúrica (E-learning)",
    descripcion: "Sitio web de cursos con flujo de pagos integrado y autenticación segura de usuarios mediante JWT.",
    tecnologias: ["React", "MongoDB", "Express", "JWT"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1789687936/screen-sanacion_xnsfv2.png",
    repoLink: "",
    demoLink: "https://sanacioncosmotelurica.com"
  },
  {
    id: 3,
    titulo: "Training App (Gestión de Atletas)",
    descripcion: "App Full-Stack para entrenadores. Trackeo de calzado semanal, planes personalizados y roles (Admin/Atleta).",
    tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1789687934/screen-zona_jalo2q.png",
    repoLink: "https://github.com/benjaeceiza/zona-ultra",
    demoLink: "https://zona-ultra.vercel.app/",
    credencialesDemo: {
      admin: "usuario@demo.com",
      pass: "12345678"
    }
  },
  {
    id: 4,
    titulo: "Terraloteos (Inmobiliaria)",
    descripcion: "Plataforma web para visualizar propiedades y barrios finalizados con ruteo optimizado para SEO y galerías dinámicas.",
    tecnologias: ["React", "Node.js"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1774410197/screen-terra_jb0w9c.png",
    repoLink: "https://github.com/benjaeceiza/terraloteos",
    demoLink: "https://www.terraloteos.com"
  },
  {
    id: 5,
    titulo: "Fénix Propiedades",
    descripcion: "Landing page inmobiliaria enfocada en conversión, con integración de catálogo WhatsApp y formularios de contacto EmailJS.",
    tecnologias: ["React", "Node.js", "CSS"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1774410198/screen-fenix_jqzhy0.png",
    repoLink: "https://github.com/benjaeceiza/fenix",
    demoLink: "https://www.fenixpropiedades.com.ar"
  }
];

function TarjetaProyecto({ proyecto }) {
  const [mostrarCredenciales, setMostrarCredenciales] = useState(false);

  return (
    <article className="project-card">
      <div className="project-card__image-container">
        <img
          src={proyecto.imagen}
          alt={`Captura de ${proyecto.titulo}`}
          className="project-card__img"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{proyecto.titulo}</h3>
        <p className="project-card__description">{proyecto.descripcion}</p>

        {/* ACORDEÓN DE CREDENCIALES */}
        {proyecto.credencialesDemo && (
          <div className="project-card__accordion-wrapper">
            <button
              className="accordion__toggle-btn"
              onClick={() => setMostrarCredenciales(!mostrarCredenciales)}
            >
              {mostrarCredenciales ? 'Ocultar Credenciales' : 'Ver Credenciales de Prueba'}
              {mostrarCredenciales ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div className={`accordion__content ${mostrarCredenciales ? 'open' : ''}`}>
              <div className="project-card__demo-box">
                <ul className="demo-box__list">
                  <li>
                    <strong>Admin:</strong> {proyecto.credencialesDemo.admin} <span>|</span> {proyecto.credencialesDemo.pass}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <ul className="project-card__tech-list">
          {proyecto.tecnologias.map((tech, index) => (
            <li key={index} className="project-card__tech-item">{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {proyecto.repoLink && (
            <a href={proyecto.repoLink} target="_blank" rel="noreferrer" title="Ver Código">
              <FaGithub />
            </a>
          )}
          {proyecto.demoLink && (
            <a href={proyecto.demoLink} target="_blank" rel="noreferrer" title="Ver Proyecto Real">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// COMPONENTE PRINCIPAL
function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__container wrapper">
        <h2 className="section-title"><span>02.</span> Mis Proyectos</h2>

        <div className="projects__grid">
          {misProyectos.map((proyecto) => (
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;