import styles from './footer.module.css'
import LiquidMouseReveal from './LiquidMouseReveal'

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Footer">
      <div className={styles.footer__hero}>
        <div className={styles.footer__stone}>
          <LiquidMouseReveal className={styles.footer__liquid} />
        </div>

        <div className={styles.footer__title}>
          <span className={styles.footer__titleBuilt}>Built</span>
          <span className={styles.footer__titleCarefully}>Carefully</span>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <span className={styles.footer__copy}>©Rifqi Arkaan 2026</span>

        <div className={styles.footer__links}>
          <a
            href="https://www.instagram.com/rifqi.arkaanul/"
            className={styles.footer__link}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://x.com/rifqiarkaan"
            className={styles.footer__link}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/rifqiarkaanul/"
            className={styles.footer__link}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <a
          className={styles.footer__email}
          href="mailto:designer.gabut@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          designer.gabut@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
