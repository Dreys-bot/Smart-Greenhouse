import './navbar.css'
import type { ReactNode } from 'react'

export default function Navbar({ title, rightSlot }: { title: string; rightSlot?: ReactNode }) {
  return (
    <nav className="navbar fade-in delay-1">
      <div className="navbar-left">
        <div className="logo-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.5 6c-10.3 2-18 8.3-22.4 15.1-5.3 8.1-6.8 17.2-3.9 21.1.8 1.1 2.2 2 3.9 2.1C24 44.6 29.7 38 32 31c2.2-6.6 2.7-13.6 2.7-13.6s-1.5 7-5.7 12.8c-1.1 1.5-2.4 2.7-3.7 3.4-1.5-3.6-.4-10.1 4-15.8 4.5-5.9 11.5-10.5 18.7-12.3.9-.2.7-1.5-.2-1.7Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <h1>{title}</h1>
      </div>

      <div className="navbar-right">{rightSlot}</div>
    </nav>
  )
}