
import './Footer.css';

function Footer() {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        
        <div className="footer__content">
          <p className="footer__text">
            &copy; {añoActual} Benjamín Eceiza. Todos los derechos reservados.
          </p>
          <p className="footer__subtext">
            Diseñado y desarrollado con React ⚛️.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;