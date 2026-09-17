import './About.css';

import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
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
                                ¡Hola! Soy Benjamín, un desarrollador Full Stack radicado en Villa Mercedes, San Luis. Actualmente combino mi formación universitaria en <strong>Programación de Sistemas</strong> con el desarrollo activo de software a medida para clientes reales.
                            </p>
                            <p>
                                Disfruto el desafío de tomar un proyecto desde cero y llevarlo a producción. Me muevo con fluidez entre la creación de interfaces dinámicas con <strong>React</strong> y la construcción de arquitecturas sólidas en el backend usando <strong>Node.js, Express</strong> o <strong>Java</strong>, integrando bases de datos SQL y NoSQL.
                            </p>
                            <p>
                                En el último tiempo he desarrollado desde <strong>plataformas de e-learning</strong> hasta <strong>sistemas de gestión inmobiliaria</strong> y aplicaciones de reservas. Mi enfoque es directo: escribir código limpio, priorizar la escalabilidad y entregar soluciones tecnológicas que realmente sumen valor.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Grilla de Skills */}
                    <div className="about__skills">
                        <div className="skill-card"><FaHtml5 className="skill-icon html" /> <span>HTML5</span></div>
                        <div className="skill-card"><FaCss3Alt className="skill-icon css" /> <span>CSS3</span></div>
                        <div className="skill-card"><IoLogoJavascript className="skill-icon js" /> <span>JavaScript</span></div>
                        <div className="skill-card"><FaReact className="skill-icon react" /> <span>React JS</span></div>
                        <div className="skill-card"><FaNodeJs className="skill-icon node" /> <span>Node.js</span></div>
                        <div className="skill-card"><FaJava className="skill-icon java" /> <span>Java</span></div>
                        <div className="skill-card"><FaDatabase className="skill-icon sql" /> <span>SQL</span></div>
                        <div className="skill-card"><DiMongodb className="skill-icon mongo" /> <span>MongoDB</span></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;