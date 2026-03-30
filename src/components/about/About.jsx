


import './About.css';

import { FaHtml5, FaCss3Alt, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';

function About() {
    return (
        <section className="about" id="sobre-mi">
            <div className="about__container wrapper">

                <h2 className="section-title"><span>01.</span> Sobre Mí & Skills</h2>

                <div className="about__content-wrapper">

                    {/* COLUMNA IZQUIERDA: La Ventana de Navegador/Terminal */}
                    <div className="about__text-box">
                        <div className="about__window-header">
                            <div className="about__dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <div className="about__window-title">www.benjaeceiza.dev</div>
                        </div>
                        <div className="about__window-body">
                            <p>
                                ¡Hola! Soy Benjamín, un desarrollador web radicado en San Luis con <strong>+2 años de experiencia</strong> transformando ideas en productos digitales reales.
                            </p>
                            <p>
                                Aunque mi fuerte es crear interfaces dinámicas y obsesionarme con el detalle visual en <strong>React</strong>, me muevo muy cómodo en todo el ecosistema <strong>MERN</strong> (Node.js, Express, MongoDB).
                            </p>
                            <p>
                                Me encanta agarrar proyectos complejos de principio a fin. Ya sea armando el panel de administración para una app de gestión, o integrando flujos de pago y autenticación segura (JWT) para plataformas de e-learning. Mi objetivo siempre es escribir código limpio que el usuario ni note, pero que disfrute usar.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Grilla de Skills (Modo Glassmorphism) */}
                    <div className="about__skills">
                        <div className="skill-card"><FaHtml5 className="skill-icon html" /> <span>HTML5</span></div>
                        <div className="skill-card"><FaCss3Alt className="skill-icon css" /> <span>CSS3</span></div>
                        <div className="skill-card"><IoLogoJavascript className="skill-icon js" /> <span>JavaScript</span></div>
                        <div className="skill-card"><FaReact className="skill-icon react" /> <span>React JS</span></div>
                        <div className="skill-card"><DiMongodb className="skill-icon mongo" /> <span>MongoDB</span></div>
                        <div className="skill-card"><IoLogoFirebase className="skill-icon firebase" /> <span>Firebase</span></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;