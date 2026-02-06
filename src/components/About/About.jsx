import './about.css'
import arrowUp from '../../../assets/arrow-up.svg'

const timeline = [
  {
    year: '2025',
    badge: 'Present',
    title: 'Product Designer, Brand Designer & Framer Dev',
    companies: [
      { name: 'Blissful Design', url: 'https://blissful.design/' },
    ],
  },
  {
    year: '2023',
    title: 'Product Designer, Mobile and Web Interfaces',
    companies: [
      { name: 'Bemobile', url: 'https://apps.apple.com/id/app/bemobile-dnar/id6446429674' },
    ],
  },
  {
    year: '2022',
    title: 'Product Designer for Digital Platforms',
    companies: [{ name: 'emiten.com', url: 'https://emiten.com/' }],
  },
  {
    year: '2021',
    title: 'Freelance Designer',
    companies: [
      { name: 'Fiverr', url: 'https://www.fiverr.com/rifqiarkaanul?source=gig_page' },
      { name: 'ui8.net', url: 'https://ui8.net/users/rifqi-arkaan' },
    ],
    multiRow: true,
  },
]

const Arrow = () => <img src={arrowUp} alt="Arrow up" className="about-arrow" />

const CompanyLink = ({ company }) => (
  <a
    className="about-company"
    href={company.url}
    target="_blank"
    rel="noreferrer"
  >
    <span className="about-company-name">{company.name}</span>
    <Arrow />
  </a>
)

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">ABOUT</span>
          <h2 className="about-title" id="about-heading">
            I work on digital products across interface, system, and interaction layers.
          </h2>
        </div>

        <div className="about-timeline">
          {timeline.map((item, idx) => (
            <div className="about-row" key={idx}>
              <div className="about-year-group">
                <span className="about-year">{item.year}</span>
                {item.badge ? <span className="about-badge">{item.badge}</span> : null}
              </div>

              <div className="about-detail">
                <span className="about-role">{item.title}</span>

                {item.multiRow ? (
                  <div className="about-multi">
                    {item.companies.map((company) => (
                      <CompanyLink company={company} key={company.name} />
                    ))}
                  </div>
                ) : (
                  <CompanyLink company={item.companies[0]} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
