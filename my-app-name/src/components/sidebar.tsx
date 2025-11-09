import './sidebar.css'

type SidebarLink = {
  id: string
  label: string
  icon: () => JSX.Element
}

const mainLinks: SidebarLink[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'report', label: 'Report', icon: LogsIcon },
  { id: 'map', label: 'Map', icon: MapIcon },
  { id: 'analytics', label: 'Analytics', icon: AnalyticsIcon },
]

const bottomLinks: SidebarLink[] = [
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
  { id: 'profile', label: 'Profile', icon: ProfileIcon },
]

type SidebarProps = {
  activeId: string
  onSelect: (id: string) => void
}

export default function Sidebar({ activeId, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar fade-in delay-2">
      <div className="sidebar-top">
        {mainLinks.map(link => (
          <button
            key={link.id}
            className={`sidebar-button ${activeId === link.id ? 'active' : ''}`}
            aria-label={link.label}
            onClick={() => onSelect(link.id)}
          >
            <link.icon />
          </button>
        ))}
      </div>

      <div className="sidebar-bottom">
        {bottomLinks.map(link => (
          <button
            key={link.id}
            className={`sidebar-button ${activeId === link.id ? 'active' : ''}`}
            aria-label={link.label}
            onClick={() => onSelect(link.id)}
          >
            <link.icon />
          </button>
        ))}
      </div>
    </aside>
  )
}

/* === Icônes SVG inline === */
function HomeIcon() {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 10.5 12 4l7 6.5v8a1 1 0 0 1-1 1h-4v-4.5h-4V19.5H6a1 1 0 0 1-1-1v-8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
function LogsIcon() {
return (
    <svg viewBox="0 0 24 24" fill="none">
    <rect x="5" y="4.5" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 9h6M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)
}
  
function MapIcon() {
return (
    <svg viewBox="0 0 24 24" fill="none">
    <path
        d="m4.5 6.75 5.25-2.25 5.25 2.25 4.5-2.25v12.75l-4.5 2.25-5.25-2.25-5.25 2.25V6.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
    />
    <path d="m9.75 4.5.05 12.05M15 6.75l.05 12.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)
}
  
function AnalyticsIcon() {
return (
    <svg viewBox="0 0 24 24" fill="none">
    <path d="M6 13.5v6M12 9v10.5M18 4.5v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)
}
  
function SettingsIcon() {
return (
    <svg viewBox="0 0 24 24" fill="none">
    <path
        d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM18.25 12a6.25 6.25 0 0 0-.06-.9l2.07-1.6-1.5-2.6-2.44 1a6.26 6.26 0 0 0-1.56-.9l-.37-2.6h-3l-.37 2.6a6.26 6.26 0 0 0-1.56.9l-2.44-1-1.5 2.6 2.07 1.6a6.25 6.25 0 0 0 0 1.8l-2.07 1.6 1.5 2.6 2.44-1c.47.38 1 .69 1.56.9l.37 2.6h3l.37-2.6c.56-.21 1.09-.52 1.56-.9l2.44 1 1.5-2.6-2.07-1.6c.04-.29.06-.59.06-.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
    />
    </svg>
)
}
  
function ProfileIcon() {
return (
    <svg viewBox="0 0 24 24" fill="none">
    <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-6 2-6 4.5V20h12v-1.5c0-2.5-2.67-4.5-6-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
    />
    </svg>
)
}