import './main-content.css'

const primaryMetrics = [
  {
    id: 'health',
    title: 'Plant Health',
    value: '94%',
    subtitle: 'Good',
    description: 'Your plants are thriving and showing excellent health',
    accent: 'success',
    icon: HealthIcon,
  },
  {
    id: 'wind',
    title: 'Wind',
    value: '2',
    unit: 'm/s',
    description: 'Make sure there is still adequate airflow',
    accent: 'neutral',
    icon: WindIcon,
  },
  {
    id: 'temperature',
    title: 'Temperature',
    value: '19',
    unit: '°C',
    description: 'Maintain consistent between 15°C and 20°C',
    accent: 'neutral',
    icon: TemperatureIcon,
  },
]

const secondaryMetrics = [
  {
    id: 'ph',
    title: 'pH Level',
    value: '7.6',
    description: 'Add acidic compost to balance the pH',
    icon: PhIcon,
  },
  {
    id: 'humidity',
    title: 'Humidity',
    value: '82%',
    description: 'Ensure ventilation is sufficient to prevent mold growth',
    icon: HumidityIcon,
  },
  {
    id: 'soil-moisture',
    title: 'Soil Moisture',
    value: '65%',
    description: 'Keep monitoring to ensure it remains consistent',
    icon: MoistureIcon,
  },
]

export default function MainContent() {
  return (
    <main className="main-content">
      <section className="summary-panel fade-in delay-3">
        <div className="summary-panel__left">
          <header className="summary-panel__top">
            <div className="summary-panel__location">
              <LocationIcon />
              <span>Weilburg, Germany</span>
            </div>
            <div className="summary-panel__datetime">
              <span>Tue, 10 September 2024</span>
              <span>09:37 AM</span>
            </div>
          </header>

          <div className="summary-panel__temperature">
            <span className="summary-panel__value">24°C</span>
            <div className="summary-panel__condition">
              <SunIcon />
              <div>
                <span>Sunny</span>
                <div className="summary-panel__range">
                  <span>H: 26°C</span>
                  <span>L: 15°C</span>
                </div>
              </div>
            </div>
          </div>

          <div className="summary-panel__info-card">
            <div className="info-card__title">Spinach Garden 08</div>
            <div className="info-card__meta">
              <span>
                <strong>ID</strong> PL-02J
              </span>
              <span>
                <strong>Area</strong> 200 m²
              </span>
            </div>
          </div>
        </div>

        <div className="summary-panel__right">
          <div className="map-canvas">
            <div className="map-canvas__grid" />
            <div className="map-canvas__plots">
              <div className="map-canvas__plot map-canvas__plot--active">
                <span>PL-02J</span>
              </div>
              <div className="map-canvas__plot map-canvas__plot--inactive">
                <span>PL-02T</span>
              </div>
            </div>
            <div className="map-canvas__path" />
          </div>
        </div>
      </section>

      <section className="metrics-grid metrics-grid--primary fade-in delay-4">
        {primaryMetrics.map(metric => (
          <article
            key={metric.id}
            className={`metric-card metric-card--${metric.accent ?? 'neutral'}`}
          >
            <header className="metric-card__header">
              <div className="metric-icon">
                <metric.icon />
              </div>
              <MetricArrowIcon />
            </header>
            <div className="metric-card__body">
              <span className="metric-title">{metric.title}</span>
              <div className="metric-value">
                {metric.value}
                {metric.unit ? <span className="metric-unit">{metric.unit}</span> : null}
              </div>
              {metric.subtitle ? (
                <span className="metric-subtitle">{metric.subtitle}</span>
              ) : null}
              <p className="metric-description">{metric.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="metrics-grid metrics-grid--secondary fade-in delay-5">
        {secondaryMetrics.map(metric => (
          <article key={metric.id} className="metric-card metric-card--secondary">
            <header className="metric-card__header">
              <div className="metric-icon metric-icon--subtle">
                <metric.icon />
              </div>
              <MetricArrowIcon />
            </header>
            <div className="metric-card__body">
              <span className="metric-title">{metric.title}</span>
              <div className="metric-value">{metric.value}</div>
              <p className="metric-description">{metric.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

function MetricArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M6.25 13.75 13.75 6.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.25h6.25v6.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#F59E0B" strokeWidth="1.5" />
      <path
        d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78 18.36 18.36M18.36 5.64 19.78 4.22M4.22 19.78 5.64 18.36"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21c4.5-3.2 7.5-6.8 7.5-10.6A4.9 4.9 0 0 0 12 6.2a4.9 4.9 0 0 0-7.5 4.2C4.5 14.2 7.5 17.8 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h10.5a2 2 0 1 0-1.9-2.6M6 16h11a2 2 0 1 1-2 2M3 8h8a2 2 0 1 0-2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TemperatureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M15 13.5V6.25a3 3 0 1 0-6 0V13.5A4.5 4.5 0 1 0 15 13.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 7.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PhIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17V7h3.25a2.5 2.5 0 1 1 0 5H7M17 10v7M14 10v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HumidityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5c-3 4-6 6.8-6 10.1a6 6 0 1 0 12 0c0-3.3-3-6.1-6-10.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.5a2 2 0 0 0 2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoistureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5c-2.2 3-5 5.8-5 9.2a5 5 0 1 0 10 0c0-3.4-2.8-6.2-5-9.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.5c-.8 0-1.5.7-1.5 1.5 0 .7.5 1.3 1.1 1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 11.875a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M3.75 8.75c0 4.375 6.25 8.75 6.25 8.75s6.25-4.375 6.25-8.75a6.25 6.25 0 1 0-12.5 0Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}