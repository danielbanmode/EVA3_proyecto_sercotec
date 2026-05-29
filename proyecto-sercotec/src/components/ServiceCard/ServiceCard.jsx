import { useNavigate } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard({ id, titulo, descripcion, imagen, servicio }) {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate(`/contacto?servicio=${servicio}`)
  }

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={imagen || '/placeholder.jpg'} alt={titulo} />
      </div>
      <div className="service-card-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button className="service-card-btn" onClick={handleContactClick}>
          Contáctanos
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
