import './report-layout.css'
import type { ReactNode } from 'react'
import Sidebar from './sidebar'

type ReportLayoutProps = {
  activeId: string
  onSelect: (id: string) => void
}

const kpiCards = [
  {
    id: 'overall-health',
    title: 'Overall Plant Health',
    value: '95%',
    badge: 'Excellent',
    description: 'Plants showing vigorous growth, balanced nutrition, and minimal stress signs.',
    accent: 'success',
    icon: LeafIcon,
  },
  {
    id: 'soil-moisture',
    title: 'Average Soil Moisture',
    value: '72%',
    description: 'Moisture levels optimal; maintaining steady hydration ensures sustained plant health.',
    accent: 'neutral',
    icon: DropletIcon,
  },
  {
    id: 'ph-level',
    title: 'Average pH Level',
    value: '6.8',
    description: 'Soil slightly acidic, ideal for nutrient uptake and healthy root development.',
    accent: 'neutral',
    icon: GaugeIcon,
  },
]

const alerts = [
  {
    id: 'alert-1',
    title: '3 Sick Plants Section 2',
    tag: 'Sick Plant',
    tone: 'warning',
    message: 'Detected unhealthy plants',
  },
  {
    id: 'alert-2',
    title: 'Low Moisture Section 2',
    tag: 'Low',
    tone: 'low',
    message: 'Detected dry soil area',
  },
  {
    id: 'alert-3',
    title: 'Humidity > 90% Section 4',
    tag: 'High',
    tone: 'high',
    message: 'Risk of fungal growth due to high humidity',
  },
  {
    id: 'alert-4',
    title: 'pH Low (5.2) Section 3',
    tag: 'pH',
    tone: 'ph',
    message: 'Soil acidity is below optimal level',
  },
  {
    id: 'alert-5',
    title: 'Sensor Offline: #TH011',
    tag: 'Error',
    tone: 'error',
    message: 'No data received from sensor',
  },
]

const reportRows = [
  {
    date: '01 Oct 25',
    plant: 'Spinach',
    area: 'Garden Q2',
    health: '92%',
    status: 'Good',
    harvest: 'Nov 25 (45 Days)',
    moisture: '71%',
  },
  {
    date: '02 Oct 25',
    plant: 'Spinach',
    area: 'Garden Q2',
    health: '91%',
    status: 'Low',
    harvest: 'Nov 24 (44 Days)',
    moisture: '69%',
  },
  {
    date: '03 Oct 25',
    plant: 'Spinach',
    area: 'Garden Q2',
    health: '90%',
    status: 'Good',
    harvest: 'Nov 23 (43 Days)',
    moisture: '72%',
  },
  {
    date: '04 Oct 25',
    plant: 'Spinach',
    area: 'Garden Q2',
    health: '89%',
    status: 'Good',
    harvest: 'Nov 22 (42 Days)',
    moisture: '73%',
  },
  {
    date: '05 Oct 25',
    plant: 'Kale',
    area: 'Garden Q1',
    health: '87%',
    status: 'High',
    harvest: 'Nov 19 (39 Days)',
    moisture: '68%',
  },
  {
    date: '06 Oct 25',
    plant: 'Lettuce',
    area: 'Garden Q3',
    health: '82%',
    status: 'Ph',
    harvest: 'Nov 16 (36 Days)',
    moisture: '65%',
  },
  {
    date: '07 Oct 25',
    plant: 'Tomato',
    area: 'Greenhouse A1',
    health: '78%',
    status: 'Error',
    harvest: 'Nov 12 (32 Days)',
    moisture: '61%',
  },
]

export default function ReportLayout({ activeId, onSelect }: ReportLayoutProps) {
  return (
    <div className="report-layout">
      <Sidebar activeId={activeId} onSelect={onSelect} />
      <div className="report-main">
        <div className="report-primary">
          

          <section className="report-kpi-row fade-in delay-3">
            {kpiCards.map(card => (
              <article key={card.id} className={`report-kpi-card report-kpi-card--${card.accent}`}>
                <header className="report-kpi-card__header">
                  <div className="report-kpi-card__icon">
                    <card.icon />
                  </div>
                  <span className="report-kpi-card__title">{card.title}</span>
                  <span className="report-kpi-card__chevron">
                    <ArrowUpRightIcon />
                  </span>
                </header>
                <div className="report-kpi-card__value">
                  {card.value}
                  {card.badge ? <span className="report-kpi-card__badge">{card.badge}</span> : null}
                </div>
                <p className="report-kpi-card__description">{card.description}</p>
              </article>
            ))}
          </section>

          <section className="report-main-grid fade-in delay-4">
            <article className="report-trends-card">
              <header className="report-section-header">
                <span className="report-section-title">Plants Health Trends</span>
                <button type="button" className="report-icon-button" aria-label="Open chart options">
                  <MoreIcon />
                </button>
              </header>
              <div className="report-chart">
                <ChartSVG />
                <div className="report-chart__legend">
                  <LegendChip color="#2fb463">Soil Moisture</LegendChip>
                  <LegendChip color="#f7b955">Precip (mm)</LegendChip>
                  <LegendChip color="#5f9cf7">Humidity</LegendChip>
                  <LegendChip color="#9b6cf4">Growth</LegendChip>
                </div>
              </div>
            </article>
          </section>

          <section className="report-table-shell fade-in delay-5">
            <header className="report-section-header">
              <span className="report-section-title">Report Details</span>
              <button type="button" className="report-icon-button" aria-label="Open table menu">
                <MoreIcon />
              </button>
            </header>
            <div className="report-table-inner">
              <div className="report-table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Plant</th>
                      <th>Area</th>
                      <th>Health</th>
                      <th>Status</th>
                      <th>Harvest Prediction</th>
                      <th>Moisture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportRows.map(row => (
                      <tr key={row.date}>
                        <td>{row.date}</td>
                        <td>{row.plant}</td>
                        <td>{row.area}</td>
                        <td>{row.health}</td>
                        <td>
                          <span className={`report-table-status report-table-status--${row.status.toLowerCase()}`}>
                            {row.status}
                          </span>
                        </td>
                        <td>{row.harvest}</td>
                        <td>{row.moisture}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        <aside className="report-secondary">
          <section className="report-camera-card fade-in delay-4">
            <header className="report-section-header">
              <span className="report-section-title">Camera 2</span>
              <div className="report-camera-meta">
                <span>2 / 5</span>
                <button type="button" className="report-icon-button" aria-label="Expand camera">
                  <ExpandIcon />
                </button>
              </div>
            </header>
            <div className="report-camera-image">
              <img
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80"
                alt="Greenhouse camera feed"
              />
            </div>
            <div className="report-camera-controls">
              <button type="button" aria-label="Previous frame">
                <ArrowLeftIcon />
              </button>
              <button type="button" aria-label="Capture image">
                <CameraIcon />
              </button>
              <button type="button" aria-label="Toggle alert">
                <BellIcon />
              </button>
              <button type="button" aria-label="Next frame">
                <ArrowRightIcon />
              </button>
            </div>
          </section>

          <section className="report-alerts-card fade-in delay-5">
            <header className="report-section-header">
              <span className="report-section-title">Alerts Summary</span>
              <button type="button" className="report-icon-button" aria-label="Open alerts">
                <ExpandIcon />
              </button>
            </header>
            <ul className="report-alerts-list">
              {alerts.map(alert => (
                <li key={alert.id} className="report-alerts-item">
                  <div>
                    <span className="report-alerts-title">{alert.title}</span>
                    <p className="report-alerts-message">{alert.message}</p>
                  </div>
                  <span className={`report-alerts-tag report-alerts-tag--${alert.tone}`}>
                    {alert.tag}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M7.125 4.375H4.375v2.75M12.875 4.375H15.625v2.75M7.125 15.625H4.375v-2.75M12.875 15.625H15.625v-2.75M7.125 7.125 4.375 4.375M12.875 7.125 15.625 4.375M7.125 12.875 4.375 15.625M12.875 12.875 15.625 15.625"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="4.5" cy="10" r="1.5" fill="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="10" r="1.5" fill="currentColor" />
    </svg>
  )
}

type LegendChipProps = {
  color: string
  children: ReactNode
}

function LegendChip({ color, children }: LegendChipProps) {
  return (
    <span className="report-chart__chip">
      <span className="report-chart__chip-dot" style={{ backgroundColor: color }} />
      {children}
    </span>
  )
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M10 7h4l1 2h3a1.5 1.5 0 0 1 1.5 1.5V17A1.5 1.5 0 0 1 18 18.5H6A1.5 1.5 0 0 1 4.5 17v-6.5A1.5 1.5 0 0 1 6 9h3l1-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M18 9a6 6 0 0 0-12 0c0 3-1.5 5-3 6h18c-1.5-1-3-3-3-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13.5 19a1.5 1.5 0 0 1-3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4c-6.4 1.5-10.3 5-12.7 8.4C4.2 15.9 3 19.2 4.7 21.3c.4.5 1 .8 1.6.8 4.2.2 6.6-2.8 7.8-5.7 1.6-3.8 1.6-7.6 1.6-7.6s-.6 3.8-2.7 6.6c-1.1 1.5-2.4 2.7-3.7 3.4-.6-1.8-.2-4.9 2-7.7 2.4-3 6-5.2 9.7-6 .5-.1.7-.7.3-1.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5c-2.7 3.4-5.5 6-5.5 9.4a5.5 5.5 0 1 0 11 0c0-3.4-2.8-6-5.5-9.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 13.5a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function GaugeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20 13.5a8 8 0 1 0-16 0 1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="m12 13 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M15 7.5 9.5 12 15 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 7.5 14.5 12 9 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M6.5 13.5 13.5 6.5M8 6.5h5.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChartSVG() {
  return (
    <svg viewBox="0 0 560 220" className="report-chart__svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGreen" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(47,180,99,0.35)" />
          <stop offset="100%" stopColor="rgba(47,180,99,0)" />
        </linearGradient>
        <linearGradient id="areaYellow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(247,185,85,0.35)" />
          <stop offset="100%" stopColor="rgba(247,185,85,0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="560" height="220" fill="rgba(255,255,255,0.75)" rx="20" />
      <g stroke="#dcdcdc" strokeWidth="1">
        <line x1="80" y1="40" x2="530" y2="40" />
        <line x1="80" y1="80" x2="530" y2="80" />
        <line x1="80" y1="120" x2="530" y2="120" />
        <line x1="80" y1="160" x2="530" y2="160" />
        <line x1="80" y1="200" x2="530" y2="200" />
      </g>
      <g fill="#8f8f8f" fontSize="10" fontWeight="600" textAnchor="end">
        <text x="70" y="43">100%</text>
        <text x="70" y="83">80%</text>
        <text x="70" y="123">60%</text>
        <text x="70" y="163">40%</text>
        <text x="70" y="203">20%</text>
        <text x="70" y="220">0%</text>
      </g>
      <g fill="#8f8f8f" fontSize="10" fontWeight="600" textAnchor="middle">
        <text x="110" y="212">1 Oct</text>
        <text x="170" y="212">2 Oct</text>
        <text x="230" y="212">3 Oct</text>
        <text x="290" y="212">4 Oct</text>
        <text x="350" y="212">5 Oct</text>
        <text x="410" y="212">6 Oct</text>
        <text x="470" y="212">7 Oct</text>
      </g>
      <path
        d="M30 170C70 140 90 110 130 120C170 130 190 80 230 90C270 100 290 150 330 140C370 130 390 100 430 110C470 120 490 90 530 100V200H30Z"
        fill="url(#areaGreen)"
      />
      <path
        d="M30 180C70 160 90 145 130 155C170 165 190 130 230 135C270 140 290 175 330 170C370 165 390 145 430 150C470 155 490 140 530 145V200H30Z"
        fill="url(#areaYellow)"
      />
      <polyline
        points="30,140 70,120 110,135 150,105 190,120 230,80 270,140 310,120 350,135 390,95 430,110 470,90 510,120 530,110"
        fill="none"
        stroke="#2fb463"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="30,160 70,150 110,140 150,155 190,150 230,140 270,165 310,160 350,150 390,155 430,150 470,145 510,150 530,148"
        fill="none"
        stroke="#f7b955"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

