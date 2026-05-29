import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ubicación</h3>
          <p className="footer-contact">
            <FaMapMarkerAlt /> Manuel Rodríguez Sur 749, Santiago (Metro Toesca)
          </p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p className="footer-contact">
            <FaEnvelope /> centro.santiago@centrossercotec.cl
          </p>
          <p className="footer-contact">
            <FaPhone /> +56 2 XXXX XXXX
          </p>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <a href="https://www.facebook.com/centrodnsantiago" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Centro de Negocios Santiago. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
