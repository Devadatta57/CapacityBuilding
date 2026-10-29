// Outline icons traced from the reference artwork. Each card icon shares a
// 52 × 52 box so they sit on the same baseline inside the cards.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.7,
}

/* ---------- Feature card icons ---------- */

export function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" {...props}>
      <g {...stroke}>
        <circle cx="26" cy="13.5" r="7.3" />
        <circle cx="9.5" cy="19.5" r="5.2" />
        <circle cx="42.5" cy="19.5" r="5.2" />
        <path d="M12.5 45.5V37a13.5 11 0 0 1 27 0v8.5z" />
        <path d="M10.4 29C5.6 29.4 2 33 2 37.6v7.9h6.6" />
        <path d="M41.6 29c4.8.4 8.4 4 8.4 8.6v7.9h-6.6" />
      </g>
    </svg>
  )
}

export function SproutIcon(props) {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" {...props}>
      <g {...stroke} strokeLinejoin="round">
        <path d="M5 11.5c11.5 0 19.6 7 21 21.5C11.5 31.6 5 23.5 5 11.5z" />
        <path d="M47 11.5c-11.5 0-19.6 7-21 21.5 14.5-1.4 21-9.5 21-21.5z" />
        <path d="M26 33v13.5" />
      </g>
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" {...props}>
      <g {...stroke}>
        <circle cx="26" cy="26.5" r="20" />
        <ellipse cx="26" cy="26.5" rx="8.6" ry="20" />
        <path d="M6 26.5h40" />
        <path d="M9.2 15.3Q26 20.3 42.8 15.3" />
        <path d="M9.2 37.7Q26 32.7 42.8 37.7" />
      </g>
    </svg>
  )
}

export function GrowthIcon(props) {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="3.5" y="39.5" width="8" height="12.5" />
        <rect x="16.5" y="31.5" width="7.5" height="20.5" />
        <rect x="31" y="24" width="8" height="28" />
        <path d="M35 24v-7.5" />
        <path
          d="M23 5.5c6.3 0 11.2 4.1 12 11-6.6-.7-12-4.5-12-11zM47 2.5c-8.4 0-12 5.9-12 14 6.6 0 12-5.7 12-14z"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
