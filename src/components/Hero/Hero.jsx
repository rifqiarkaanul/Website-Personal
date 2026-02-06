import styles from './hero.module.css'
import SiteNav from '../SiteNav/SiteNav'

function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <SiteNav />

      <div className={styles.hero__main}>
        <div className={styles.hero__copy}>
          <span className={styles.hero__name}>Rifqi Arkaan</span>
          <h1 className={styles.hero__headline} id="hero-heading">
            Design and shape digital interfaces with a strong focus on usability and visual clarity.
          </h1>
        </div>

        <div className={styles.hero__imageCard}>
          <img
            src="/assets/hero.png"
            alt="Design preview"
            width="240"
            height="159"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className={styles.hero__image}
            sizes="240px"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
