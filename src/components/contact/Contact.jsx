// src/components/Contact/Contact.jsx
import  { useRef, useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [estadoEnvio, setEstadoEnvio] = useState('idle'); 

  const sendEmail = (e) => {
    e.preventDefault();
    setEstadoEnvio('loading'); 

    emailjs.sendForm(
      'service_9bojsir',     
      'template_j6a0dq2',    
      form.current,
      'ozycZTfYueG9-OUJR'      
    )
    .then((result) => {
        console.log("Mensaje enviado:", result.text);
        setEstadoEnvio('success'); 
        e.target.reset(); 

      
        setTimeout(() => {
          setEstadoEnvio('idle');
        }, 5000);

    }, (error) => {
        console.error("Error al enviar:", error.text);
        setEstadoEnvio('error'); 

        setTimeout(() => {
          setEstadoEnvio('idle');
        }, 5000);
    });
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container wrapper">
        
        <h2 className="section-title"><span>03.</span> Contacto</h2>

        <div className="contact__content">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="contact__info">
            <h3 className="contact__subtitle">¿Trabajamos juntos?</h3>
            <p className="contact__text">
              Actualmente estoy abierto a nuevas oportunidades. Si estás buscando sumar un desarrollador MERN a tu equipo, tenés un proyecto en mente, o simplemente querés saludar, ¡escribime! Siempre trato de responder lo más rápido posible.
            </p>
            
            <ul className="contact__details">
              <li>
                <FaMapMarkerAlt className="contact__icon" />
                <span>San Luis, Argentina (Remoto)</span>
              </li>
              <li>
                <FaEnvelope className="contact__icon" />
                <a href="mailto:benjaeceiza400@gmail.com">benjaeceiza400@gmail.com</a>
              </li>
            </ul>

            <div className="contact__socials">
              <a href="https://github.com/benjaeceiza" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/benjamin-eceiza/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="contact__form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <input type="hidden" name="time" value={new Date().toLocaleString('es-AR')} />

              <div className="contact__input-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required disabled={estadoEnvio === 'loading'} />
              </div>
              
              <div className="contact__input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="tu@email.com" required disabled={estadoEnvio === 'loading'} />
              </div>
              
              <div className="contact__input-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" placeholder="¿En qué te puedo ayudar?" required disabled={estadoEnvio === 'loading'}></textarea>
              </div>

              {/* Botón dinámico con Spinner */}
              <button type="submit" className="contact__submit-btn" disabled={estadoEnvio === 'loading'}>
                {estadoEnvio === 'loading' ? (
                  <>
                    <FaSpinner className="icon-spin" /> Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              {/* Mensajes de Feedback abajo del botón */}
              {estadoEnvio === 'success' && (
                <div className="contact__msg contact__msg--success">
                  <FaCheckCircle /> ¡Mensaje enviado!
                </div>
              )}

              {estadoEnvio === 'error' && (
                <div className="contact__msg contact__msg--error">
                  <FaExclamationCircle /> Hubo un error. Por favor, intentá de nuevo.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;