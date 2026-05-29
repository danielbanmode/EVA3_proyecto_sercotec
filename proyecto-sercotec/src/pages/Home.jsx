import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel'
import { getServicios, getTestimonios, getFaqs, getAbout } from '../api/services'

function Home() {
  const [servicios, setServicios] = useState([])
  const [testimonios, setTestimonios] = useState([])
  const [faqs, setFaqs] = useState([])
  const [about, setAbout] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()

  // 🔐 Cargar datos
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const [serviciosData, testimoniosData, faqsData, aboutData] = await Promise.all([
          getServicios(),
          getTestimonios(),
          getFaqs(),
          getAbout()
        ])
        
        setServicios(serviciosData.servicios || serviciosData)
        setTestimonios(testimoniosData)
        setFaqs(faqsData)
        setAbout(aboutData)
      } catch (err) {
        console.error('Error al cargar datos:', err)
        setError('Error al cargar los datos. Por favor, recarga la página.')
      } finally {
        setLoading(false)
      }
    }

    cargarDatos()
  }, [])

  // 🔐 Scroll automático a sección cuando hay hash en URL
  useEffect(() => {
    if (location.hash) {
      // Esperar a que el DOM se renderice completamente
      setTimeout(() => {
        const sectionId = location.hash.replace('#', '')
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location])

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="home">
      <Header />

      {/* Sección Nosotros */}
      <section id="nosotros" className="section-nosotros">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          {about && (
            <div className="about-content">
              <p>{about.descripcion}</p>
              <div className="about-stats">
                {about.stats && about.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <h3>{stat.numero}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="section-servicios">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            {servicios.map((servicio) => (
              <ServiceCard
                key={servicio.id}
                id={servicio.id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                imagen={servicio.imagen}
                servicio={servicio.servicio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="section-testimonios">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <TestimonialsCarousel testimonials={testimonios} />
        </div>
      </section>

      {/* Sección FAQs */}
      <section id="faqs" className="section-faqs">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faqs-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${expandedFaq === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.pregunta}
                  <span className="faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.respuesta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
