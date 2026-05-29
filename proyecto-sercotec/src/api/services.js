// Consumir datos desde archivos JSON locales
export const getServicios = async () => {
  try {
    const response = await fetch('/data/servicios.json')
    if (!response.ok) throw new Error('Error al cargar servicios')
    return await response.json()
  } catch (error) {
    console.error('Error en getServicios:', error)
    throw error
  }
}

export const getTestimonios = async () => {
  try {
    const response = await fetch('/data/testimonios.json')
    if (!response.ok) throw new Error('Error al cargar testimonios')
    const data = await response.json()
    return data.testimonios
  } catch (error) {
    console.error('Error en getTestimonios:', error)
    throw error
  }
}

export const getFaqs = async () => {
  try {
    const response = await fetch('/data/faqs.json')
    if (!response.ok) throw new Error('Error al cargar FAQs')
    const data = await response.json()
    return data.faqs
  } catch (error) {
    console.error('Error en getFaqs:', error)
    throw error
  }
}

export const getAbout = async () => {
  try {
    const response = await fetch('/data/about.json')
    if (!response.ok) throw new Error('Error al cargar información')
    const data = await response.json()
    return data.about
  } catch (error) {
    console.error('Error en getAbout:', error)
    throw error
  }
}

export const sendContacto = async (data) => {
  try {
    // Validar que el JSON sea válido
    if (!data.nombre || !data.email || !data.mensaje) {
      throw new Error('Todos los campos son requeridos')
    }

    // Validar email con regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      throw new Error('Email no válido')
    }

    // Aquí irá la llamada real a la API cuando tengas backend
    // const response = await fetch('/api/contactos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // return await response.json()

    // Por ahora, simulamos respuesta exitosa
    console.log('Contacto recibido:', data)
    return { 
      success: true, 
      message: 'Tu mensaje ha sido recibido. Nos contactaremos pronto.' 
    }
  } catch (error) {
    console.error('Error al enviar contacto:', error)
    throw error
  }
}
