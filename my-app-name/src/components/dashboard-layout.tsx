import './dashboard-layout.css'
import Sidebar from './sidebar'
import MainContent from './main-content'
import DevicePanel from './device-panel'
import RightPanel from './right-panel'

type DashboardLayoutProps = {
  activeId: string
  onSelect: (id: string) => void
}

export default function DashboardLayout({ activeId, onSelect }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <Sidebar activeId={activeId} onSelect={onSelect} />
      <MainContent />
      <DevicePanel />
      <RightPanel />
    </div>
  )
}