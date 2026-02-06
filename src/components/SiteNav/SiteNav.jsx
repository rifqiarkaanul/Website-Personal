import { NavLink } from 'react-router-dom'
import styles from '../Hero/hero.module.css'

const navLinkClass = ({ isActive }) =>
  isActive ? `${styles.hero__navItem} ${styles.hero__navItemActive}` : styles.hero__navItem

function SiteNav() {
  return (
    <nav className={styles.hero__nav} aria-label="Primary">
      <NavLink to="/" className={navLinkClass} end>
        <span className={styles.hero__navLabel}>Work</span>
        <span className={styles.hero__navDot} aria-hidden="true" />
      </NavLink>
      <NavLink to="/products" className={navLinkClass}>
        <span className={styles.hero__navLabel}>Products</span>
        <span className={styles.hero__navDot} aria-hidden="true" />
      </NavLink>
      <NavLink to="/experiments" className={navLinkClass}>
        <span className={styles.hero__navLabel}>Experiments</span>
        <span className={styles.hero__navDot} aria-hidden="true" />
      </NavLink>
    </nav>
  )
}

export default SiteNav
