import { useState, useEffect } from 'react'
import './TestimonialsCarousel.css'

function TestimonialsCarousel({ testimonials = [] }) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoPlay || testimonials.length === 0) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, testimonials.length])

  if (testimonials.length === 0) {
    return <div className="testimonials-loading">Cargando testimonios...</div>
  }

  return (
    <div className="testimonials-carousel" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-item ${index === current ? 'active' : ''}`}>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.texto}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.nombre}</h4>
                <span>{testimonial.cargo}</span>
                {testimonial.empresa && <span className="testimonial-company">{testimonial.empresa}</span>}
              </div>
              {testimonial.rating && <div className="testimonial-rating">{'⭐'.repeat(testimonial.rating)}</div>}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Anterior">
        ❮
      </button>
      <button className="carousel-btn carousel-next" onClick={next} aria-label="Siguiente">
        ❯
      </button>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button key={index} className={`dot ${index === current ? 'active' : ''}`} onClick={() => setCurrent(index)} aria-label={`Ir al testimonio ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsCarousel
