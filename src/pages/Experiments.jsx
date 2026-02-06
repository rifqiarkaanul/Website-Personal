import SiteNav from '../components/SiteNav/SiteNav'
import './pagePlaceholder.css'

function Experiments() {
  return (
    <>
      <div className="page-placeholder__nav">
        <SiteNav />
      </div>
      <section className="page-placeholder" aria-label="Experiments coming soon">
        <img
          className="page-placeholder__image"
          src="/images/Coming Soon.webp"
          alt="Experiments coming soon"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  )
}

export default Experiments
