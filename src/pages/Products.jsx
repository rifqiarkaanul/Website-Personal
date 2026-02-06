import SiteNav from '../components/SiteNav/SiteNav'
import './pagePlaceholder.css'

function Products() {
  return (
    <>
      <div className="page-placeholder__nav">
        <SiteNav />
      </div>
      <section className="page-placeholder" aria-label="Products coming soon">
        <img
          className="page-placeholder__image"
          src="/images/Coming Soon.webp"
          alt="Products coming soon"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  )
}

export default Products
