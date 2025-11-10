import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import DashboardLayout from './components/dashboard-layout'
import ReportLayout from './components/report-layout'

function App() {
  const [activeSidebar, setActiveSidebar] = useState('home')

  const currentView = activeSidebar === 'report' ? 'report' : 'dashboard'

  const dashboardRight = (
    <>
      <button className="alert-button">
        <svg className="bell-icon" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <span>3 Alert</span>
        <svg className="arrow-icon" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </button>

      <div className="sector-selector">
        <label>Sector :</label>
        <select className="sector-dropdown" defaultValue="Spinach Garden 01">
          <option>Spinach Garden 01</option>
          <option>Spinach Garden 02</option>
          <option>Spinach Garden 03</option>
        </select>
      </div>
    </>
  )

  const reportRight = (
    <div className="navbar-report-actions">
      <button className="nav-export-button">
        <ExportIcon />
        <span>Export</span>
      </button>
      <button className="nav-date-chip">
        <CalendarIcon />
        <span>01 - 07 October 2025</span>
      </button>
      <div className="nav-sector-chip">
        <span>Sector</span>
        <select defaultValue="Spinach Garden 02">
          <option>Spinach Garden 01</option>
          <option>Spinach Garden 02</option>
          <option>Spinach Garden 03</option>
        </select>
      </div>
    </div>
  )

  return (
    <div className="app">
      <Navbar title={currentView === 'dashboard' ? 'Greenhouse Monitoring' : 'Greenhouse Report'} rightSlot={currentView === 'dashboard' ? dashboardRight : reportRight} />
      {currentView === 'dashboard' ? (
        <DashboardLayout activeId={activeSidebar} onSelect={setActiveSidebar} />
      ) : (
        <ReportLayout activeId={activeSidebar} onSelect={setActiveSidebar} />
      )}
    </div>
  )
}

function ExportIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
      <path d="M10 12.5V3.5M10 3.5 6.5 7M10 3.5l3.5 3.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12.5v3a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
      <rect x={3} y={5} width={14} height={12} rx={2} stroke="currentColor" strokeWidth={1.6} />
      <path d="M3 8.5h14" stroke="currentColor" strokeWidth={1.6} />
      <path d="M7 3v2.5M13 3v2.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  )
}

export default App
