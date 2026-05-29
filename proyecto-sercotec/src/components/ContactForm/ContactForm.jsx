import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './ContactForm.css'

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm()
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [services, setServices] = useState(['Asesoramiento', 'Capacitación', 'Diagnóstico', 'Otros'])
  
  // 🔐 Anti-bot protection: honeypot field
  const [honeypot, setHoneypot] = useState('')
  
  // 🔐 Anti-bot protection: rate limiting
  const lastSubmitTime = useRef(0)
  const RATE_LIMIT_MS = 10000 // 10 segundos entre envíos
  
  // 🔐 Track user interaction
  const userInteractionRef = useRef(false)

  useEffect(() => {
    const servicio = searchParams.get('servicio')
    if (servicio) {
      setValue('servicio', servicio)
    }
  }, [searchParams, setValue])

  const onSubmit = async (data) => {
    setLoading(true)
    setMessage('')

    try {
      // 🔐 HONEYPOT VALIDATION - If honeypot field is filled, it's a bot
      if (honeypot.trim() !== '') {
        console.warn('⚠️ Honeypot field detectado - Posible bot')
        // Mostramos éxito falso para confundir bots (sin enviar datos)
        setMessage('¡Mensaje enviado correctamente! Nos contactaremos pronto.')
        setTimeout(() => setMessage(''), 3000)
        setLoading(false)
        return
      }

      // 🔐 RATE LIMITING - Prevenir spam (máximo 1 envío cada 10 segundos)
      const now = Date.now()
      if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
        const segundosRestantes = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime.current)) / 1000)
        throw new Error(`Por favor espera ${segundosRestantes} segundos antes de enviar otro mensaje`)
      }
      lastSubmitTime.current = now

      // 🔐 USER INTERACTION CHECK - Verificar que el usuario realmente interactuó
      if (!userInteractionRef.current) {
        throw new Error('Por favor completa el formulario de forma interactiva')
      }

      // Validaciones adicionales
      if (!data.nombre || !data.email || !data.mensaje) {
        throw new Error('Por favor completa todos los campos requeridos')
      }

      // 🔐 Email regex validation (segunda validación)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        throw new Error('El formato del email no es válido')
      }

      // Aquí iría la llamada real a la API
      console.log('✅ Formulario enviado - Datos validados:', {
        nombre: data.nombre,
        email: data.email,
        servicio: data.servicio,
        timestamp: new Date().toISOString()
      })

      setMessage('¡Mensaje enviado correctamente! Nos contactaremos pronto.')
      reset() // Limpiar formulario
      setHoneypot('') // Limpiar honeypot
      userInteractionRef.current = false // Reset interaction flag
      
      setTimeout(() => {
        setMessage('')
      }, 3000)
    } catch (error) {
      setMessage(`Error: ${error.message || 'Error al enviar el formulario'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2>Formulario de Contacto</h2>
        <p className="form-description">Cuéntanos sobre tu necesidad y nos contactaremos pronto</p>

        {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</div>}

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          
          {/* 🔐 HONEYPOT FIELD - Campo oculto para detectar bots */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{
              display: 'none',
              position: 'absolute',
              left: '-9999px',
              visibility: 'hidden'
            }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              id="nombre"
              {...register('nombre', { required: 'El nombre es requerido' })}
              placeholder="Tu nombre completo"
              className={errors.nombre ? 'input-error' : ''}
              onFocus={() => { userInteractionRef.current = true }}
              onChange={(e) => { userInteractionRef.current = true }}
            />
            {errors.nombre && <span className="error-text">{errors.nombre.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'El email es requerido',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email inválido',
                },
              })}
              placeholder="tu@email.com"
              className={errors.email ? 'input-error' : ''}
              onFocus={() => { userInteractionRef.current = true }}
              onChange={(e) => { userInteractionRef.current = true }}
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              id="telefono"
              {...register('telefono', { required: 'El teléfono es requerido' })}
              placeholder="+56 9 XXXX XXXX"
              className={errors.telefono ? 'input-error' : ''}
              onFocus={() => { userInteractionRef.current = true }}
              onChange={(e) => { userInteractionRef.current = true }}
            />
            {errors.telefono && <span className="error-text">{errors.telefono.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio *</label>
            <select
              id="servicio"
              {...register('servicio', { required: 'Selecciona un servicio' })}
              className={errors.servicio ? 'input-error' : ''}
              onFocus={() => { userInteractionRef.current = true }}
              onChange={(e) => { userInteractionRef.current = true }}>
              <option value="">Selecciona un servicio</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.servicio && <span className="error-text">{errors.servicio.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              {...register('mensaje', { required: 'El mensaje es requerido' })}
              placeholder="Cuéntanos tu consulta o necesidad..."
              rows="5"
              className={errors.mensaje ? 'input-error' : ''}
              onFocus={() => { userInteractionRef.current = true }}
              onChange={(e) => { userInteractionRef.current = true }}
            />
            {errors.mensaje && <span className="error-text">{errors.mensaje.message}</span>}
          </div>

          <div className="form-footer">
            <button type="submit" disabled={loading} className="contact-form-btn">
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            <small className="security-note">🔐 Formulario protegido contra bots</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
