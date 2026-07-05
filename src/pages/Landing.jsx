import { useNavigate } from 'react-router-dom'
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'
import { mockTestimonials, industryCategories } from '../data/mockData'
import './Landing.css'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <main className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>El boca a boca, reinventado</h1>
            <p className="hero-subtitle">
              Conecta empresas innovadoras con consumidores reales que prueban productos y comparten feedback auténtico.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => navigate('/company')}>
                Soy una empresa
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/tester')}>
                Quiero ser tester
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-graphic">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>¿Cómo funciona?</h2>
          
          <div className="two-column">
            {/* Para Empresas */}
            <div className="how-section">
              <h3>Para Empresas</h3>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Publicá tu oferta</h4>
                  <p>Define el producto, cantidad de muestras, perfil de tester y presupuesto. Nuestra calculadora te ayuda a calcular precios justos.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Recibí aplicaciones</h4>
                  <p>Los testers califican basándose en su match con tu ICP. Revisá perfiles, reputación e historial antes de seleccionar.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Recibí feedback auténtico</h4>
                  <p>Los testers entregan reportes con fotos, videos y respuestas. El pago se libera automáticamente cuando cumplen el checklist.</p>
                </div>
              </div>
            </div>

            {/* Para Testers */}
            <div className="how-section">
              <h3>Para Testers</h3>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Explorá ofertas</h4>
                  <p>Navega por productos nuevos de marcas. El sistema te muestra el % de match con tu perfil y la remuneración ofrecida.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Aplicá con tu propuesta</h4>
                  <p>Contale por qué sos el perfil ideal. Sé auténtico. Podés aplicar de forma anónima si lo prefers.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Gana dinero real</h4>
                  <p>Recibí el producto, úsalo como siempre, sube tu reporte y cobá mediante escrow seguro cuando cumplas los entregables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries">
        <div className="container">
          <h2>Industrias que ya usan Testey</h2>
          <div className="industries-grid">
            {industryCategories.map(industry => (
              <div key={industry.id} className="industry-card">
                <span className="industry-emoji">{industry.emoji}</span>
                <h4>{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="testimonials">
        <div className="container">
          <h2>Lo que dicen nuestros usuarios</h2>
          <div className="testimonials-grid">
            {mockTestimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} className="author-avatar" />
                  <div>
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props">
        <div className="container">
          <div className="value-grid">
            <div className="value-item">
              <Zap className="value-icon" color="#0F7A6B" />
              <h3>Feedback auténtico</h3>
              <p>Consumidores reales usando tu producto en su vida cotidiana, no en un laboratorio.</p>
            </div>
            <div className="value-item">
              <Users className="value-icon" color="#0F7A6B" />
              <h3>Perfiles verificados</h3>
              <p>Cada tester está validado. Historial completo, reputación y matches calculados científicamente.</p>
            </div>
            <div className="value-item">
              <TrendingUp className="value-icon" color="#0F7A6B" />
              <h3>Escrow automático</h3>
              <p>Pago liberado solo cuando se cumplen todos los entregables. Seguridad para ambas partes.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
