import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CompanyDashboard from './pages/CompanyDashboard'
import TesterMarketplace from './pages/TesterMarketplace'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/company/*" element={<CompanyDashboard />} />
        <Route path="/tester/*" element={<TesterMarketplace />} />
      </Routes>
    </div>
  )
}

export default App
