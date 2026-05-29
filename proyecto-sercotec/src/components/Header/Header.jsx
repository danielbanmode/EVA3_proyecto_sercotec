import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Centro de Negocios Santiago de SERCOTEC</h1>
        <p>Apoyo integral a micro, pequeñas y medianas empresas</p>
        <button className="header-btn" onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}>
          Conoce nuestros servicios
        </button>
      </div>
      <div className="header-overlay"></div>
    </header>
  )
}

export default Header
