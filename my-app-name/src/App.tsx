import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import DashboardLayout from './components/dashboard-layout'
import ReportLayout from './components/report-layout'

function App() {
  const [activeSidebar, setActiveSidebar] = useState('home')

  const currentView = activeSidebar === 'report' ? 'report' : 'dashboard'

  return (
    <div className="app">
      <Navbar />
      {currentView === 'dashboard' ? (
        <DashboardLayout activeId={activeSidebar} onSelect={setActiveSidebar} />
      ) : (
        <ReportLayout activeId={activeSidebar} onSelect={setActiveSidebar} />
      )}
    </div>
  )
}

export default App
