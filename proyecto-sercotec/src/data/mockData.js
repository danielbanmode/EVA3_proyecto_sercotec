import asesoramiento from '../assets/images/asesoramiento.png'
import capacitacion from '../assets/images/capacitacion.png'
import diagnostico from '../assets/images/diagnostico.png'
import financiamiento from '../assets/images/financiamiento.png'
import innovacion from '../assets/images/innovacion.png'
import redes from '../assets/images/redes.png'

export const mockServicios = [
  {
    id: 1,
    titulo: 'Asesoramiento Empresarial',
    descripcion: 'Recibe asesoría especializada para mejorar la gestión de tu negocio, acceso a mercados y estrategia comercial.',
    imagen: asesoramiento,
    servicio: 'Asesoramiento'
  },
  {
    id: 2,
    titulo: 'Capacitación y Formación',
    descripcion: 'Programas de capacitación diseñados para fortalecer habilidades gerenciales y técnicas de tu equipo.',
    imagen: capacitacion,
    servicio: 'Capacitación'
  },
  {
    id: 3,
    titulo: 'Diagnóstico Empresarial',
    descripcion: 'Análisis integral de tu empresa para identificar fortalezas y oportunidades de mejora.',
    imagen: diagnostico,
    servicio: 'Diagnóstico'
  },
  {
    id: 4,
    titulo: 'Acceso a Financiamiento',
    descripcion: 'Orientación y apoyo para acceder a créditos y financiamiento para el crecimiento de tu negocio.',
    imagen: financiamiento,
    servicio: 'Otros'
  },
  {
    id: 5,
    titulo: 'Innovación y Digitalización',
    descripcion: 'Acompañamiento en la transformación digital de tus procesos empresariales.',
    imagen: innovacion,
    servicio: 'Asesoramiento'
  },
  {
    id: 6,
    titulo: 'Redes y Alianzas Comerciales',
    descripcion: 'Conexión con otras empresas y actores del ecosistema para expandir tu negocio.',
    imagen: redes,
    servicio: 'Otros'
  }
]

export const mockTestimonios = [
  {
    id: 1,
    texto: 'Gracias al asesoramiento del Centro de Negocios, nuestras ventas aumentaron un 40% en 6 meses. Excelente atención.',
    nombre: 'Carlos González',
    cargo: 'Gerente General',
    empresa: 'Empresa Constructora XYZ',
    rating: 5
  },
  {
    id: 2,
    texto: 'La capacitación que recibimos fue muy práctica y aplicable inmediatamente en nuestro negocio.',
    nombre: 'María López',
    cargo: 'Propietaria',
    empresa: 'Café & Pan Local',
    rating: 5
  },
  {
    id: 3,
    texto: 'El diagnóstico empresarial nos permitió reorganizar nuestros procesos y reducir costos significativamente.',
    nombre: 'Juan Rodríguez',
    cargo: 'Administrador',
    empresa: 'Distribuidora Regional',
    rating: 4
  },
  {
    id: 4,
    texto: 'Muy recomendable. El equipo es profesional, atento y comprometido con el crecimiento de nuestro negocio.',
    nombre: 'Patricia Martínez',
    cargo: 'Directora de Operaciones',
    empresa: 'Servicios Integrales S.A.',
    rating: 5
  },
  {
    id: 5,
    texto: 'Excelente experiencia. Nos ayudaron a acceder a financiamiento que no sabíamos que existía para nuestro rubro.',
    nombre: 'Roberto Silva',
    cargo: 'Emprendedor',
    empresa: 'Tech Startups Chile',
    rating: 5
  }
]

export const mockFaqs = [
  {
    id: 1,
    pregunta: '¿Cuáles son los requisitos para acceder a los servicios?',
    respuesta: 'Deben ser micro, pequeñas o medianas empresas formales o en proceso de formalización ubicadas en la región metropolitana. No hay costo de acceso para los servicios de asesoramiento.'
  },
  {
    id: 2,
    pregunta: '¿Cuánto tiempo dura el proceso de asesoramiento?',
    respuesta: 'El tiempo varía según el servicio. Los diagnósticos generalmente toman 2-3 meses, mientras que los asesoramientos puntuales pueden ser de menor duración.'
  },
  {
    id: 3,
    pregunta: '¿Hay costos asociados a los servicios?',
    respuesta: 'Los servicios de asesoramiento y capacitación básica son gratuitos. Algunos servicios especializados pueden tener costos que se definen según el proyecto.'
  },
  {
    id: 4,
    pregunta: '¿Cuál es la modalidad de atención?',
    respuesta: 'Ofrecemos atención presencial, online y mixta según las necesidades del cliente. Puedes elegir la modalidad más conveniente para tu empresa.'
  },
  {
    id: 5,
    pregunta: '¿Cómo puedo contactar a los asesores?',
    respuesta: 'Puedes llenar el formulario de contacto en nuestro sitio web, enviar un email a centro.santiago@centrossercotec.cl o llamar directamente al teléfono del centro.'
  },
  {
    id: 6,
    pregunta: '¿Hay seguimiento después de la asesorería?',
    respuesta: 'Sí, realizamos seguimiento periódico para verificar la implementación de recomendaciones y ajustar estrategias según sea necesario.'
  },
  {
    id: 7,
    pregunta: '¿Puedo acceder a más de un servicio simultáneamente?',
    respuesta: 'Por supuesto. Puedes combinar servicios para potenciar el crecimiento de tu empresa de forma integral.'
  },
  {
    id: 8,
    pregunta: '¿Qué necesito llevar a la primera reunión?',
    respuesta: 'Lleva información sobre tu empresa (RUT, datos de contacto, información financiera básica). Nuestro equipo te indicará qué documentación adicional puede ser útil.'
  },
  {
    id: 9,
    pregunta: '¿Cómo se selecciona el asesor que me atenderá?',
    respuesta: 'Asignamos un asesor especializado en tu rubro con base en tus necesidades específicas y la disponibilidad de nuestro equipo.'
  },
  {
    id: 10,
    pregunta: '¿Hay capacitaciones certificadas?',
    respuesta: 'Sí, ofrecemos capacitaciones certificadas por instituciones reconocidas. Consulta el catálogo de programas disponibles.'
  }
]

export const mockAbout = {
  descripcion: 'El Centro de Negocios Santiago de SERCOTEC es una institución dedicada a apoyar el desarrollo y crecimiento de micro, pequeñas y medianas empresas (Mipymes) en la región metropolitana. Con más de 20 años de experiencia, contamos con un equipo multidisciplinario de profesionales comprometidos con el éxito empresarial de nuestros clientes.',
  stats: [
    { numero: '500+', label: 'Empresas Asesoradas' },
    { numero: '2,000+', label: 'Personas Capacitadas' },
    { numero: '20 años', label: 'De Experiencia' },
    { numero: '95%', label: 'Satisfacción Clientela' }
  ]
}
