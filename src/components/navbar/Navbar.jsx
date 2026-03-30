
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        
        {/* Tu "Logo" o Marca Personal */}
        <div className="navbar__logo">
          <a href="#">&lt;Benja /&gt;</a>
        </div>

        {/* Links de navegación */}
        <ul className="navbar__links">
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;