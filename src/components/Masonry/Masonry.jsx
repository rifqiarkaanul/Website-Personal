import styles from './masonry.module.css'

const items = [
  {
    image: '/images/Porto 1.webp',
    title: 'Lumina',
    tag: 'Mobile App',
    height: 482,
    column: 0,
    delay: 0.05,
  },
  {
    image: '/images/Porto 5.webp',
    title: 'Liquid Reveal Cursor',
    tag: 'Framer',
    height: 376,
    column: 0,
    delay: 0.1,
  },
  {
    image: '/images/Porto 12.webp',
    title: 'Contara',
    tag: 'Branding',
    height: 482,
    column: 0,
    delay: 0.15,
  },
  {
    image: '/images/Porto 6.webp',
    title: 'Zatanna AI',
    tag: 'Design + Framer Dev',
    height: 376,
    column: 0,
    delay: 0.2,
  },
  {
    image: '/images/Porto 3.webp',
    title: 'Wear Clair',
    tag: 'Branding',
    height: 376,
    column: 1,
    delay: 0.25,
  },
  {
    image: '/images/Porto 10.webp',
    title: 'Zingage',
    tag: 'Design + Framer Dev',
    height: 482,
    column: 1,
    delay: 0.3,
  },
  {
    image: '/images/Porto 4.webp',
    title: 'Tagged Music',
    tag: 'Branding',
    height: 255,
    column: 1,
    delay: 0.35,
  },
  {
    image: '/images/Porto 11.webp',
    title: 'Contara',
    tag: 'Design + Framer Dev',
    height: 482,
    column: 1,
    delay: 0.4,
  },
  {
    image: '/images/Porto 9.webp',
    title: 'Cleansta',
    tag: 'Mobile App',
    height: 482,
    column: 2,
    delay: 0.45,
  },
  {
    image: '/images/Porto 2.webp',
    title: 'Wear Clair',
    tag: 'Branding',
    height: 482,
    column: 2,
    delay: 0.5,
  },
  {
    image: '/images/Porto 7.webp',
    title: 'Ankor',
    tag: 'Design + Framer Dev',
    height: 376,
    column: 2,
    delay: 0.55,
  },
  {
    image: '/images/Porto 8.webp',
    title: 'Lumina',
    tag: 'Mobile App',
    height: 376,
    column: 2,
    delay: 0.6,
  },
]

const columns = [
  items.filter((item) => item.column === 0),
  items.filter((item) => item.column === 1),
  items.filter((item) => item.column === 2),
]

function Masonry() {
  return (
    <section className={styles.masonry} id="work" aria-label="Portfolio projects">
      {columns.map((col, idx) => (
        <div className={styles.masonry__column} key={idx}>
          {col.map((card, i) => (
            <div
              className={styles.masonry__card}
              key={`${card.title}-${i}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div
                className={styles.masonry__image}
                style={{ aspectRatio: `376/${card.height}` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  width={376}
                  height={card.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 90vw, (max-width: 1200px) 33vw, 376px"
                />
              </div>
              <div className={styles.masonry__meta}>
                <span className={styles.masonry__title}>{card.title}</span>
                <span className={styles.masonry__tag}>{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Masonry
