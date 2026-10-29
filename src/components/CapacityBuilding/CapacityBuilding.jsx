import photo from '../../assets/capacitybuilding.webp'
import decor from '../../assets/hero-decor.webp'
import {
  GlobeIcon,
  GrowthIcon,
  PeopleIcon,
  SproutIcon,
} from './icons.jsx'
import './CapacityBuilding.css'

// Descriptions use "\n" for the line breaks of the design (desktop only).
const FEATURES = [
  {
    tone: 'warm',
    Icon: PeopleIcon,
    title: 'Empowered Leadership',
    text: 'Strengthening BoDs and CEO\nwith modern management practices',
  },
  {
    tone: 'green',
    Icon: SproutIcon,
    title: 'Better Farming Practices',
    text: 'Training producer members\non GAP for high-quality produce',
  },
  {
    tone: 'blue',
    Icon: GlobeIcon,
    title: 'Global Market Access',
    text: 'Aligning produce with\ninternational standards',
  },
  {
    tone: 'pink',
    Icon: GrowthIcon,
    title: 'Sustainable Growth',
    // non-breaking hyphen keeps "self-reliant" on one line
    text: 'Building resilient and\nself‑reliant FPOs',
  },
]

export default function CapacityBuilding() {
  return (
    <section className="cb-hero" aria-labelledby="cb-hero-title">
      <div className="cb-hero__content">
        <span className="cb-hero__accent" aria-hidden="true" />
        <h2 id="cb-hero-title" className="cb-hero__title">
          Capacity Building for Organisational Excellence
        </h2>
        <div className="cb-hero__copy">
          <p>
          Practical training videos and guidance on registrations, statutory compliance, finance, GST, documentation, digital tools, government schemes and effective organisational management.
            
          </p>
          <p>
           Build stronger operations, improve business efficiency, establish value addition units, and explore farming, marketing and export opportunities for sustainable growth.
           
            
          </p>
        </div>
      </div>

      <div className="cb-hero__media">
        <img
          className="cb-hero__photo"
          src={photo}
          alt="A trainer presenting good agriculture practices to farmers seated in a green field"
          fetchPriority="high"
        />
        <img className="cb-hero__decor" src={decor} alt="" />
      </div>

      <ul className="cb-hero__cards">
        {FEATURES.map(({ tone, Icon, title, text }) => (
          <li key={title} className={`cb-card cb-card--${tone}`}>
            <div className="cb-card__body">
              <h3 className="cb-card__title">{title}</h3>
              <p className="cb-card__text">{text}</p>
            </div>
            <span className="cb-card__icon">
              <Icon />
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
