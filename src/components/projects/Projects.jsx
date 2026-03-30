// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// ARRAY DE DATOS
const misProyectos = [
    {
    id: 1,
    titulo: "Sanación Cosmotelúrica (Plataforma E-learning)",
    descripcion: "Sitio web de cursos con flujo de pagos integrado y autenticación segura de usuarios mediante JWT.",
    tecnologias: ["React JS", "Mongo DB", "Express", "JWT"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1774410199/screen-sanacion_jsshw4.png",
    repoLink: "",
    demoLink: "https://sanacioncosmotelurica.com"
  },
  {
    id: 2,
    titulo: "Training App (Gestión de Atletas)",
    descripcion: "Aplicación Full-Stack para entrenadores y corredores. Permite crear planes de entrenamiento personalizados, gestionar usuarios, roles (Admin/Atleta) y trackear el progreso semanal.",
    tecnologias: ["React JS", "Node.js", "Express", "MongoDB"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1774431171/screen-zona_gy7ngk.png",
    repoLink: "https://github.com/benjaeceiza/zona-ultra",
    demoLink: "https://zona-ultra.vercel.app/",
    credencialesDemo: {
      admin: "usuario@demo.com",
      pass: "12345678"
    }
  },
  {
    id: 3,
    titulo: "Terraloteos",
    descripcion: "Pagina web inmobiliaria. Permite visualizar propiedades, ver barrios finalizados. Llamados a la acción funcionales.",
    tecnologias: ["React JS", "Node.js"],
    imagen: "https://res.cloudinary.com/dmnksm3th/image/upload/v1774410197/screen-terra_jb0w9c.png",
    repoLink: "https://github.com/benjaeceiza/terraloteos",
    demoLink: "https://www.terraloteos.com"
  },

  {
    id: 4,
    titulo: "Fenix propiedades",
    descripcion: "Sitio web tipo 'One Page' orientado a marketing inmobiliario. Estructurado estratégicamente para guiar al usuario a través de los proyectos disponibles y culminar en un formulario de contacto dinámico de alta conversión.",
    tecnologias: ["React JS", "Node.js", "CSS"],
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
            // Usamos el sub-componente acá
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;