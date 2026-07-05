import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">T</span>
            <span className="brand-text">Testey</span>
          </Link>
          
          <div className="navbar-nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/company" 
              className={`nav-link ${isActive('/company') ? 'active' : ''}`}
            >
              Para Empresas
            </Link>
            <Link 
              to="/tester" 
              className={`nav-link ${isActive('/tester') ? 'active' : ''}`}
            >
              Para Testers
            </Link>
          </div>
          
          <div className="navbar-actions">
            <button className="btn btn-secondary btn-small">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
