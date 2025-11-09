import { useMemo, useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import './right-panel.css'

type Task = {
  id: string
  title: string
  subtitle: string
  time: string
  done: boolean
}

const initialTasks: Task[] = [
  {
    id: 'watering',
    title: 'Watering',
    subtitle: 'Water plants with 1 inch of water in the morning',
    time: '07:00 AM - 07:30 AM',
    done: true,
  },
  {
    id: 'fertilizing',
    title: 'Fertilizing',
    subtitle: 'Apply organic fertilizer at base of plants. Quantity: 50g per plant',
    time: '07:30 AM - 10:00 AM',
    done: true,
  },
  {
    id: 'inspection',
    title: 'Pest Inspection',
    subtitle: 'Check leaves for any signs of aphids or other pests',
    time: '10:00 AM - 11:00 AM',
    done: false,
  },
  {
    id: 'soil',
    title: 'Soil Aeration',
    subtitle: 'Loosen soil around the plants carefully without damaging roots',
    time: '11:00 AM - 12:00 PM',
    done: false,
  },
]

export default function RightPanel() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [isCameraExpanded, setIsCameraExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  const { completed, percentage } = useMemo(() => {
    const total = tasks.length
    const completedCount = tasks.filter(task => task.done).length
    const ratio = total === 0 ? 0 : Math.round((completedCount / total) * 100)
    return { completed: completedCount, percentage: ratio }
  }, [tasks])

  const handleToggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  return (
    <aside className="right-panel fade-in delay-6">
      <section className="camera-card">
        <header className="card-header">
          <div>
            <span className="card-title">Camera 1</span>
            <span className="card-subtitle">1 / 5</span>
          </div>
          <button
            className="icon-button"
            aria-label="Expand camera"
            onClick={() => setIsCameraExpanded(true)}
          >
            <ExpandIcon />
          </button>
        </header>

        <div className="camera-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
            alt="Greenhouse camera view"
          />
        </div>

        <div className="camera-controls">
          <button className="control-button" aria-label="Previous image">
            <ArrowLeftIcon />
          </button>
          <button className="control-button" aria-label="Show notifications">
            <NotificationIcon />
          </button>
          <button
            className="control-button control-button--primary"
            aria-label="Capture photo"
          >
            <CameraIcon />
          </button>
          <button className="control-button" aria-label="Next image">
            <ArrowRightIcon />
          </button>
        </div>
      </section>

      <section className="task-card">
        <header className="card-header">
          <div>
            <span className="card-title">Task</span>
            <span className="card-subtitle">
              {completed}/{tasks.length} Task Completed
            </span>
          </div>
          <button className="icon-button" aria-label="Open tasks">
            <ExpandIcon />
          </button>
        </header>

        <div className="task-progress">
          <div className="progress-info">
            <span className="progress-label">{percentage}%</span>
            <span className="progress-caption">Completed today</span>
          </div>
          <div className="progress-bar">
              <div
                className="progress-value"
                style={
                  {
                    '--progress-value': isMounted ? `${percentage}%` : '0%',
                  } as CSSProperties
                }
              />
          </div>
        </div>

        <ul className="task-list">
          {tasks.map(task => (
            <li
              key={task.id}
              className={`task-item ${task.done ? 'done' : ''}`}
              onClick={() => handleToggleTask(task.id)}
              role="button"
              tabIndex={0}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  handleToggleTask(task.id)
                }
              }}
            >
              <div className="task-status">
                {task.done ? <CheckIcon /> : <CircleIcon />}
              </div>
              <div className="task-details">
                <span className="task-title">{task.title}</span>
                <span className="task-subtitle">{task.subtitle}</span>
                <span className="task-time">{task.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {isCameraExpanded && (
        <div className="camera-overlay" role="dialog" aria-modal="true">
          <div
            className="camera-overlay__backdrop"
            onClick={() => setIsCameraExpanded(false)}
          />
          <div className="camera-overlay__content">
            <button
              className="overlay-close-button"
              aria-label="Close camera view"
              onClick={() => setIsCameraExpanded(false)}
            >
              <CloseIcon />
            </button>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80"
              alt="Greenhouse camera expanded view"
            />
          </div>
        </div>
      )}
    </aside>
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

function NotificationIcon() {
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

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 7.5 6 12l4.5 4.5M18 12H6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M13.5 7.5 18 12l-4.5 4.5M6 12h11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="1.6" />
      <path
        d="M8.5 12.5 11 15l4.5-5.5"
        stroke="#4CAF50"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#C7C7C7" strokeWidth="1.4" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7l10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}



