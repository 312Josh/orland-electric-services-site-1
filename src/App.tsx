import { Link, Route, Routes, useParams } from 'react-router-dom'
import {
  address,
  articlePages,
  businessName,
  email,
  phoneHref,
  phoneNumber,
  serviceArea,
  servicePages,
  trustPoints,
} from './content/site'

const whyChooseUs = [
  {
    title: 'Built for real electrical service calls',
    body: 'From urgent repairs to planned upgrades, the work stays focused on practical electrical solutions for homes and small commercial properties.',
  },
  {
    title: 'Local coverage with responsive scheduling',
    body: 'Serving Orland Park and Cook County means faster communication, clearer service geography, and a simpler path to getting work scheduled.',
  },
  {
    title: 'Straight answers on repairs, upgrades, and next steps',
    body: 'You get customer-facing guidance that makes the situation easier to understand instead of a vague sales routine.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Call or send the job details',
    detail: 'Share the issue, your location, and whether the problem is urgent so the request can be triaged correctly.',
  },
  {
    step: '02',
    title: 'Get a clear response on scope and timing',
    detail: 'We confirm the likely service need, whether it looks urgent, and the best next step for scheduling.',
  },
  {
    step: '03',
    title: 'Move forward with repair or installation',
    detail: 'From emergency visits to planned electrical work, the goal is competent service without unnecessary delay.',
  },
]

const coverageAreas = [
  'Orland Park',
  'Tinley Park',
  'Palos Heights',
  'Palos Park',
  'Mokena',
  'Oak Forest',
  'Cook County communities nearby',
]

const faqItems = [
  {
    question: 'What kind of electrical work do you handle?',
    answer:
      'Orland Electric Services handles electrical repairs, panel upgrades, wiring issues, lighting installation, ceiling fans, appliance hookups, and emergency electrician calls.',
  },
  {
    question: 'Do you offer emergency electrician service?',
    answer:
      'Yes. The business advertises 24 hours a day, 7 days a week service for urgent electrical issues and immediate appointment requests.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Service is centered in Orland Park with coverage across nearby Cook County communities.',
  },
  {
    question: 'How do I request service?',
    answer:
      'Call directly or send an inquiry with the property location, the type of issue, and whether you need emergency attention.',
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <p>{address}</p>
        <a className="tap-call" href={phoneHref}>{phoneNumber}</a>
      </div>
      <div className="container nav-row">
        <Link to="/" className="brand-lockup" aria-label={businessName}>
          <div className="brand-mark" aria-hidden="true">
            <span>OE</span>
          </div>
          <div>
            <p className="brand-kicker">Electrical Contractor</p>
            <p className="brand-title">{businessName}</p>
          </div>
        </Link>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#areas">Service Area</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="primary-cta" href={`tel:${phoneHref.replace('tel:', '')}`}>Call Now</a>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Electrician in Orland Park</p>
            <h1>{businessName} for repairs, upgrades, and 24/7 emergency service.</h1>
            <p className="hero-copy">
              Local electrical service for homeowners and small commercial properties that need fast troubleshooting,
              dependable repair work, and clean installation of lighting, fans, appliances, and panel improvements.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href={phoneHref}>Call {phoneNumber}</a>
              <a className="secondary-cta" href="#services">View Services</a>
            </div>
            <div className="trust-strip">
              {trustPoints.map((point) => <span key={point}>{point}</span>)}
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-kicker">Contact</p>
            <h2>Reliable local electricians without the runaround.</h2>
            <div className="panel-card-grid">
              <article><strong>Call</strong><span>{phoneNumber}</span></article>
              <article><strong>Email</strong><span>{email}</span></article>
              <article><strong>Address</strong><span>{address}</span></article>
              <article><strong>Service Area</strong><span>{serviceArea}</span></article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Electrical Services</p>
            <h2>Focused on the work people actually call an electrician for.</h2>
            <p>Repair, upgrade, and installation services built around urgent issues and everyday electrical needs.</p>
          </div>
          <div className="service-grid">
            {servicePages.map((service) => (
              <article key={service.slug} className="service-card">
                <p className="card-eyebrow">Service</p>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <Link className="text-link" to={`/services/${service.slug}`}>Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="why-us">
        <div className="container why-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Why Choose {businessName}</p>
            <h2>Competent electrical service with a clear next step.</h2>
            <p>Built for local customers who want fast answers, practical repairs, and straightforward scheduling.</p>
          </div>
          <div className="why-list">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">How Service Works</p>
            <h2>Fast contact, clear scope, better electrical service.</h2>
            <p>Whether it is an emergency or a planned upgrade, the process stays simple.</p>
          </div>
          <div className="process-list">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="areas">
        <div className="container area-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Service Area</p>
            <h2>Serving Orland Park and nearby Cook County communities.</h2>
            <p>Local coverage for electrical repairs, installations, and emergency service requests.</p>
          </div>
          <div className="area-card">
            {coverageAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="section muted-section" id="inquiry">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Request Service</p>
            <h2>Tell us what is going on.</h2>
            <p>
              Share the property location, the electrical issue, and whether the situation is urgent. That makes it easier
              to respond with the right next step instead of wasting time.
            </p>
            <p className="note-line">Call now at <a className="tap-call" href={phoneHref}>{phoneNumber}</a>.</p>
          </div>
          <form className="contact-card inquiry-form" action={`mailto:${email}`} method="post" encType="text/plain">
            <div className="form-intro form-body">
              <p className="card-eyebrow">Service Request</p>
              <p className="form-intro-copy">Use the form below or call directly for emergency electrician service.</p>
            </div>
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Best phone number" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>City</span>
                <input type="text" name="city" placeholder="Orland Park, Tinley Park, Palos Heights..." />
              </label>
              <label>
                <span>Service Type</span>
                <select name="serviceType" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Emergency Electrician</option>
                  <option>Electrical Repair</option>
                  <option>Panel Upgrade</option>
                  <option>Lighting or Fan Installation</option>
                  <option>Appliance Wiring</option>
                </select>
              </label>
              <label>
                <span>Timing</span>
                <select name="timing" defaultValue="">
                  <option value="" disabled>Select timing</option>
                  <option>Emergency / ASAP</option>
                  <option>Within 2 days</option>
                  <option>This week</option>
                  <option>Planning a project</option>
                </select>
              </label>
            </div>
            <label className="full-span form-details form-body">
              <span>Project Details</span>
              <textarea name="details" rows={6} placeholder="Describe the issue, what stopped working, and anything that helps explain the electrical service you need." />
            </label>
            <button type="submit" className="primary-cta full-width">Send Request</button>
          </form>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-grid">
          <div className="section-heading compact-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Simple answers to common electrical service questions.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Helpful Articles</p>
            <h2>Practical guidance for electrical repairs and upgrades.</h2>
            <p>Read through common questions about emergency calls, panel work, and quote requests.</p>
          </div>
          <div className="service-grid">
            {articlePages.map((article) => (
              <article key={article.slug} className="service-card">
                <p className="card-eyebrow">Article</p>
                <h3>{article.title}</h3>
                <p>{article.intro}</p>
                <Link className="text-link" to={`/articles/${article.slug}`}>Read article</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicePageInner() {
  const { slug } = useParams()
  const page = servicePages.find((item) => item.slug === slug)
  if (!page) return <NotFound />
  return (
    <section className="section">
      <div className="container prose-page">
        <p className="eyebrow">Electrical Service</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.intro}</p>
        <ul>{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        <a className="primary-cta" href={phoneHref}>Call {phoneNumber}</a>
      </div>
    </section>
  )
}

function ArticlePageInner() {
  const { slug } = useParams()
  const page = articlePages.find((item) => item.slug === slug)
  if (!page) return <NotFound />
  return (
    <section className="section">
      <div className="container prose-page">
        <p className="eyebrow">Article</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.intro}</p>
        {page.sections.map((section) => (
          <div key={section.heading} className="article-block">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
        <a className="primary-cta" href={phoneHref}>Call {phoneNumber}</a>
      </div>
    </section>
  )
}

function NotFound() {
  return <section className="section"><div className="container prose-page"><h1>Page not found</h1></div></section>
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePageInner />} />
          <Route path="/articles/:slug" element={<ArticlePageInner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
