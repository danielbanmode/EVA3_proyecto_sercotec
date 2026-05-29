import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.jpg'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogoClick = () => {
    setIsOpen(false)
    navigate('/', { replace: false })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 🔐 Función para navegar a una sección (primero va a home, luego hace scroll)
  const handleSectionClick = (sectionId) => {
    setIsOpen(false)
    // Navega a home con hash
    navigate(`/#${sectionId}`)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <img src={logo} alt="SERCOTEC" className="navbar-logo-img" />
          <span>Centro de Negocios</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <button 
            className="navbar-link navbar-section-btn" 
            onClick={() => handleSectionClick('nosotros')}
            aria-label="Ir a sección Nosotros"
          >
            Nosotros
          </button>
          <button 
            className="navbar-link navbar-section-btn" 
            onClick={() => handleSectionClick('servicios')}
            aria-label="Ir a sección Servicios"
          >
            Servicios
          </button>
          <button 
            className="navbar-link navbar-section-btn" 
            onClick={() => handleSectionClick('faqs')}
            aria-label="Ir a sección Preguntas Frecuentes"
          >
            Preguntas Frecuentes
          </button>
          <Link to="/contacto" className="navbar-link navbar-link-contact" onClick={() => setIsOpen(false)}>
            Contacto
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
