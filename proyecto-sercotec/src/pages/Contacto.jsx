import ContactForm from '../components/ContactForm/ContactForm'

function Contacto() {
  return (
    <div className="contacto-page">
      <div className="contacto-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel</p>
      </div>

      <div className="contacto-content">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacto
