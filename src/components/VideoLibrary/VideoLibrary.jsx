import { useEffect, useId, useRef, useState } from 'react'
import { CATEGORIES, VIDEOS } from './videos.js'
import './VideoLibrary.css'

const ALL = 'all'

const CATEGORY_OPTIONS = [
  { id: ALL, label: 'All categories', count: VIDEOS.length },
  ...CATEGORIES.map(({ id, label }) => ({
    id,
    label,
    count: VIDEOS.filter((video) => video.category === id).length,
  })),
]

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.9">
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
      </g>
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9.5l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 68 48" aria-hidden="true">
      <path
        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
        fill="#ff0000"
      />
      <path d="M45 24 27 14v20z" fill="#ffffff" />
    </svg>
  )
}

// Labelled dropdown: a button showing the current choice and a menu of
// options with their video counts.
function Dropdown({ label, icon, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const labelId = useId()
  const valueId = useId()
  const menuId = useId()
  const current = options.find((option) => option.id === value)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (!rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const select = (id) => {
    onChange(id)
    setOpen(false)
    buttonRef.current.focus()
  }

  return (
    <div className="vl-field">
      <span id={labelId} className="vl-field__label">
        {label}
      </span>
      <div
        className="vl-filter"
        ref={rootRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
        }}
      >
        <button
          ref={buttonRef}
          type="button"
          className="vl-filter__button"
          aria-labelledby={`${labelId} ${valueId}`}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span className="vl-filter__grid">{icon}</span>
          <span id={valueId} className="vl-filter__label">
            {current.label}
          </span>
          <span className="vl-filter__chevron">
            <ChevronIcon />
          </span>
        </button>

        {open && (
          <ul id={menuId} className="vl-filter__menu" aria-label={label}>
            {options.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  className="vl-filter__option"
                  aria-pressed={option.id === value}
                  onClick={() => select(option.id)}
                >
                  <span>{option.label}</span>
                  <span className="vl-filter__count">{option.count}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function VideoCard({ video, position }) {
  return (
    <li className="vl-card">
      <a
        className="vl-card__link"
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="vl-card__thumb">
          {/* sddefault is 4:3 with letterboxing; object-fit crops it to 16:9 */}
          <img
            src={`https://i.ytimg.com/vi/${video.id}/sddefault.jpg`}
            alt=""
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
          />
          <span className="vl-card__play" aria-hidden="true">
            <YouTubeLogo />
          </span>
          {video.duration && (
            <span className="vl-card__duration">
              <span className="sr-only">Duration </span>
              {video.duration}
            </span>
          )}
        </span>
        <span className="vl-card__title">
          {position}. {video.title}
          <span className="sr-only"> (opens YouTube in a new tab)</span>
        </span>
      </a>
    </li>
  )
}

export default function VideoLibrary() {
  const [category, setCategory] = useState(ALL)

  const videos = VIDEOS.filter(
    (video) => category === ALL || video.category === category,
  )

  return (
    <section className="vl-section" aria-labelledby="vl-title">
      <div className="vl-inner">
        <div className="vl-toolbar">
          <h2 id="vl-title" className="sr-only">
            Training videos
          </h2>
          <p className="sr-only" aria-live="polite">
            Showing {videos.length} videos
          </p>
          <Dropdown
            label="Select category"
            icon={<GridIcon />}
            options={CATEGORY_OPTIONS}
            value={category}
            onChange={setCategory}
          />
        </div>

        {videos.length > 0 ? (
          <ul className="vl-grid">
            {videos.map((video, index) => (
              <VideoCard key={video.number} video={video} position={index + 1} />
            ))}
          </ul>
        ) : (
          <p className="vl-empty">No videos in this category yet.</p>
        )}
      </div>
    </section>
  )
}
