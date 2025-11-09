import './device-panel.css'

type Device = {
  id: string
  name: string
  type: 'Sensor' | 'Camera'
  code: string
  status: 'ok' | 'warning'
  alert?: string
}

const devices: Device[] = [
  {
    id: 'sm201',
    name: 'JLNew H10: Soil Moisture Sensor',
    type: 'Sensor',
    code: '#SM201',
    status: 'ok',
  },
  {
    id: 'ws004',
    name: 'HC T200 Wind Sensor',
    type: 'Sensor',
    code: '#WS004',
    status: 'ok',
  },
  {
    id: 'th011',
    name: 'ACE Temperature & Humidity Sensor',
    type: 'Sensor',
    code: '#TH011',
    status: 'warning',
    alert: 'Signal issue since 08:02 AM',
  },
  {
    id: 'cm042',
    name: 'VG550 Camera',
    type: 'Camera',
    code: '#CM042',
    status: 'ok',
  },
  {
    id: 'ph225',
    name: 'Sanity PH Meter',
    type: 'Sensor',
    code: '#PH225',
    status: 'ok',
  },
  {
    id: 'cm110',
    name: 'VG550 Camera',
    type: 'Camera',
    code: '#CM110',
    status: 'ok',
  },
]

export default function DevicePanel() {
  const sensorCount = devices.filter(device => device.type === 'Sensor').length
  const cameraCount = devices.filter(device => device.type === 'Camera').length

  return (
    <section className="device-panel fade-in delay-4">
      <header className="device-panel__header">
        <div>
          <span className="device-panel__title">Device</span>
          <div className="device-panel__meta">
            <span>Sensor {sensorCount}</span>
            <span>Camera {cameraCount}</span>
          </div>
        </div>
        <button className="device-panel__icon-button" aria-label="Open device list">
          <ExpandIcon />
        </button>
      </header>

      <ul className="device-panel__list">
        {devices.map(device => (
          <li key={device.id} className="device-panel__item">
            <span
              className={`device-panel__status device-panel__status--${device.status}`}
            />
            <div className="device-panel__info">
              <span className="device-panel__name">{device.name}</span>
              <span className="device-panel__subtitle">
                <span>{device.code}</span>
                <span>•</span>
                <span>{device.type}</span>
              </span>
              {device.alert ? (
                <span className="device-panel__alert">
                  <AlertIcon />
                  {device.alert}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
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

function AlertIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        d="m8.75 2.5 4.75 8.5c.35.62-.1 1.4-.75 1.4H3.25c-.65 0-1.1-.78-.75-1.4l4.75-8.5c.33-.59 1.17-.59 1.5 0Z"
        stroke="#E7A027"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M8 6v2.75" stroke="#E7A027" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11" r=".65" fill="#E7A027" />
    </svg>
  )
}
