import { CLIENT, getProgram, freebieCta } from '../config/client.js'
import { Reveal, Photo, Btn } from '../components/rebel/Blocks.jsx'
import { Moon } from '../components/rebel/Objects.jsx'

const bms = getProgram('bms')
const lab = getProgram('lab')

// Italic + accent word inside a heading
function Em({ children }) {
  return <em className="r-em">{children}</em>
}

// Visible marker for copy that is not final yet — never fill these in
function Pending({ children }) {
  return <p className="r-pending"><strong>[PENDIENTE]</strong> {children}</p>
}

function Eyebrow({ children, style }) {
  return <p className="r-eyebrow" style={style}>{children}</p>
}

const HERO_CARDS = [
  { label: 'Empieza gratis', name: <>Recursos <Em>gratuitos</Em></>, href: '#recursos' },
  { label: 'Mentoría', name: <>Black Moon <Em>Strategy</Em></>, href: '#black-moon' },
  { label: 'Membresía de creación de contenido', name: <>Content <Em>Lab</Em></>, href: '#content-lab' },
]

const MARQUEE = [
  { text: 'Identidad' },
  { text: 'Estrategia', em: true },
  { text: 'Comunicación' },
  { text: 'Acompañamiento', em: true },
]

const FOR_YOU = [
  'Quieres reinventarte profesionalmente o iniciar una nueva etapa.',
  'Deseas emprender con tu experiencia, tus conocimientos y tus fortalezas.',
  'Tienes una idea de negocio, pero no sabes cómo convertirla en una marca sólida.',
  'Ya tienes un negocio y sientes que tu comunicación no representa quién eres.',
  'Quieres ganar visibilidad sin imitar fórmulas de marketing que no encajan contigo.',
  'Buscas autonomía económica y libertad profesional, con estrategia y acompañamiento.',
]

const METHODS = [
  {
    title: 'Astrobranding',
    label: 'Identidad y estrategia',
    body: 'Leemos tu carta natal como mapa de tu identidad para construir una marca, una oferta y un posicionamiento que encajen contigo.',
    pointer: { label: 'Black Moon Strategy', href: '#black-moon' },
    cards: [
      { n: '01', title: 'Identidad', body: 'Descubrir qué te hace única y cómo trasladarlo a tu marca.' },
      { n: '02', title: 'Estrategia', body: 'Convertir esa identidad en un posicionamiento y una propuesta de negocio coherentes.' },
    ],
  },
  {
    title: 'Marketing energético',
    label: 'Comunicación y acompañamiento',
    body: 'Marketing que no se guía solo por tendencias ni plantillas genéricas. Se adapta a la voz de marca escrita en tu carta natal y aprovecha las corrientes energéticas más favorables para tus objetivos de venta: una ventaja estratégica frente al marketing genérico.',
    pointer: { label: 'Content Lab', href: '#content-lab' },
    cards: [
      { n: '03', title: 'Comunicación', body: 'Desarrollar un sistema de contenido alineado con tu marca y tus objetivos.' },
      { n: '04', title: 'Acompañamiento', body: 'Implementar con mentoría, formación y comunidad.' },
    ],
  },
]

const RETO_INCLUDES = [
  'Una propuesta de contenido por día',
  'Un audio training diario',
  'La psicología de la comunicación detrás de cada pieza',
  'Formatos, ganchos y estructura',
  'Indicaciones para adaptar y publicar',
]

const CONSULTORIA_INCLUDES = [
  'Revisión inicial de tu perfil de Instagram',
  'Qué dificulta que se entienda tu marca',
  'Oportunidades de mejora',
  'Primeras recomendaciones para optimizar tu perfil',
]

const FINAL_CTAS = [
  { label: 'Quiero construir mi marca', href: '#black-moon' },
  { label: 'Quiero crear mi contenido de Instagram', href: '#content-lab' },
  { label: 'Ver recursos gratuitos', href: '#recursos' },
]

export default function Home() {
  return (
    <>
      {/* 1 · Hero */}
      <section id="inicio" className="r-sec r-dark r-hero r-hero--photo">
        <Photo src={CLIENT.photos.roberta} alt={`Retrato de ${CLIENT.legalName}`} position="50% 0%" className="r-hero__photo" />
        <div className="r-wrap">
          <div className="r-hero__grid">
            <div>
              <Reveal>
                <h1 className="r-display r-lg r-hero__title">
                  Existe una forma de construir tu negocio después de los 40 que no exige que lo sacrifiques todo por él.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="r-lead" style={{ marginTop: '36px', maxWidth: '560px' }}>
                  Ayudo a mujeres con experiencia, talento y ganas de reinventarse a convertir lo que saben y lo que son en un negocio rentable, auténtico y sostenible.
                </p>
              </Reveal>
            </div>
            <div className="r-hero__moon">
              <Moon size={480} />
            </div>
          </div>

          <Reveal delay={200} className="r-hero__tagline">
            <p className="r-hand">Astrobranding · Marketing energético</p>
          </Reveal>

          <div className="r-hero__cards">
            {HERO_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 90}>
                <a href={c.href} className="r-door">
                  <span className="r-door__label">{c.label} <span aria-hidden="true">→</span></span>
                  <span className="r-door__name">{c.name}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · Marquee */}
      <div className="r-marquee" role="marquee" aria-label={MARQUEE.map(m => m.text).join(', ')}>
        <div className="r-marquee__track" aria-hidden="true">
          {[0, 1, 2, 3].map(k => (
            <span key={k} className="r-marquee__group">
              {MARQUEE.map(m => (
                <span key={m.text}>
                  {m.em ? <em>{m.text}</em> : m.text}
                  <span className="r-marquee__dot">●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 3 · Para quién es */}
      <section className="r-sec r-light r-pad">
        <div className="r-wrap">
          <div className="r-head-split">
            <Reveal><h2 className="r-display r-xl">Esto es para ti <Em>si…</Em></h2></Reveal>
            <Reveal delay={100}>
              <p className="r-lead">Tienes más de 40 años, una trayectoria que vale oro y la sensación de que ha llegado el momento de construir algo propio.</p>
            </Reveal>
          </div>
          <ol className="r-numlist">
            {FOR_YOU.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <span className="r-numlist__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="r-numlist__t">{t}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 · Mi metodología */}
      <section id="sobre" className="r-sec r-dark r-pad r-rule-top">
        <div className="r-wrap">
          <Reveal><Eyebrow>Mi metodología</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="r-display r-xl">
              Astrobranding<br />
              <Em>+ Marketing energético</Em>
            </h2>
          </Reveal>

          <div className="r-two" style={{ marginTop: 'clamp(48px, 6vw, 88px)' }}>
            <Reveal>
              <p className="r-lead r-lead--xl">Un método propio que no vas a encontrar en ningún curso genérico de marketing. Tu marca tiene que ser un reflejo exacto de quién eres, a nivel psicológico y energético.</p>
            </Reveal>
            <Reveal delay={100}>
              <p className="r-text">Por eso miro algo que nadie mira: tu carta natal. Ahí está la información que necesitamos para diseñar tu identidad, tu oferta, tu cliente ideal, tu forma de comunicar y de vender, tu relación con el dinero y tu manera de destacar en público, de forma natural, fácil y sostenible.</p>
            </Reveal>
          </div>

          <div className="r-methods">
            {METHODS.map(m => (
              <Reveal key={m.title} className="r-method">
                <div className="r-method__head">
                  <h3 className="r-display r-md">{m.title}</h3>
                  <a href={m.pointer.href} className="r-method__pointer">→ {m.pointer.label}</a>
                </div>
                <Eyebrow style={{ marginTop: '14px' }}>{m.label}</Eyebrow>
                <p className="r-text" style={{ marginTop: '18px' }}>{m.body}</p>
                <div className="r-method__cards">
                  {m.cards.map(c => (
                    <div key={c.n} className="r-mcard">
                      <span className="r-num">{c.n}</span>
                      <p className="r-mcard__title"><Em>{c.title}</Em></p>
                      <p className="r-text">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Servicios */}
      <section id="servicios" className="r-sec r-light r-pad">
        <div className="r-wrap">
          <div className="r-two r-two--cards">
            <Reveal id="black-moon" className="r-svc r-svc--dark">
              <Eyebrow>01 · Mentoría privada</Eyebrow>
              <h3 className="r-display r-lg r-svc__title">Black Moon <Em>Strategy</Em></h3>
              <p className="r-text">Una mentoría privada de estrategia de marca personal para transformar tu identidad, tu experiencia y tu potencial en una marca sólida, diferenciada y alineada con el negocio que quieres construir.</p>
              <div className="r-svc__cta"><Btn href={bms.href} variant="pink">Descubre Black Moon Strategy →</Btn></div>
            </Reveal>
            <Reveal id="content-lab" delay={100} className="r-svc">
              <Eyebrow>02 · Acompañamiento y comunidad</Eyebrow>
              <h3 className="r-display r-lg r-svc__title">Content <Em>Lab</Em></h3>
              <p className="r-text">Pasa de publicar de forma improvisada o agotadora a tener un sistema de comunicación coherente con tu marca, con formación y apoyo para implementarlo.</p>
              <p className="r-text" style={{ marginTop: '1.1em' }}>Dentro encontrarás una <strong>estrategia de contenido</strong> para organizar tu comunicación según tus objetivos de marca, <strong>masterclasses de Instagram</strong> sobre formatos, ganchos y novedades, <strong>acompañamiento semanal</strong> para resolver dudas y avanzar, y una <strong>comunidad</strong> de mujeres que trabajan en objetivos parecidos a los tuyos.</p>
              <div className="r-svc__cta"><Btn href={lab.href} variant="dark">Descubre Content Lab →</Btn></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · Recursos gratuitos */}
      <section id="recursos" className="r-sec r-paper r-pad">
        <div className="r-wrap">
          <div className="r-head-split">
            <Reveal><h2 className="r-display r-xl">Recursos <Em>gratuitos</Em></h2></Reveal>
            <Reveal delay={100}>
              <p className="r-lead">Mi universo tiene la puerta abierta. Entra con dos primeros pasos gratuitos: siete días para hacerte visible o media hora para mirar tu perfil con otros ojos.</p>
            </Reveal>
          </div>

          <div className="r-two r-two--cards">
            <Reveal id="reto" className="r-free">
              <div className="r-free__labels"><span>Reto de visibilidad</span><span>Júpiter en Leo</span></div>
              <h3 className="r-free__quote">«Siete días para dejar de esconder tu marca y empezar a comunicar lo que te hace <Em>única</Em>».</h3>
              <ol className="r-days" aria-label="Siete días">
                {[1, 2, 3, 4, 5, 6, 7].map(d => <li key={d}>{d}</li>)}
              </ol>
              <ul className="r-includes">
                {RETO_INCLUDES.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="r-svc__cta"><Btn href={freebieCta('reto')} variant="dark">Únete gratis al reto →</Btn></div>
            </Reveal>

            <Reveal id="consultoria" delay={100} className="r-free">
              <div className="r-free__labels"><span>Consultoría de visibilidad</span><span>Instagram</span></div>
              <p className="r-display r-xxl r-free__big">30 <Em>minutos</Em></p>
              <p className="r-free__quote r-free__quote--sm">«En 30 minutos, descubre qué puede estar fallando en tu perfil de Instagram y cuáles son los primeros cambios que puedes aplicar para mejorar tu imagen de marca».</p>
              <ul className="r-includes">
                {CONSULTORIA_INCLUDES.map(t => <li key={t}>{t}</li>)}
              </ul>
              <Pending>criterios de revisión, sistema de reserva y siguiente paso</Pending>
              <div className="r-svc__cta"><Btn href={freebieCta('consultoria')} variant="dark">Solicita tu consultoría gratuita →</Btn></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 · La fundadora */}
      <section className="r-sec r-dark r-pad">
        <div className="r-wrap">
          <div className="r-two r-two--founder">
            <div>
              <Reveal><Eyebrow>La fundadora</Eyebrow></Reveal>
              <Reveal delay={80}><h2 className="r-display r-xl">Hola, soy <Em>[tu nombre]</Em></h2></Reveal>
              <Reveal delay={140}>
                <p className="r-lead" style={{ marginTop: '32px' }}>Combino estrategia de negocio, marca personal, marketing, comunicación, psicología y astrología aplicada al branding para que construyas un proyecto profesional que refleje quién eres y te dé autonomía y libertad.</p>
                <Pending>nombre, trayectoria y experiencia de la fundadora</Pending>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Photo src={CLIENT.photos.roberta} alt="Retrato de la fundadora" position="50% 22%" className="r-founder__photo" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8 · Cierre */}
      <section id="contacto" className="r-sec r-light r-pad" style={{ textAlign: 'center' }}>
        <div className="r-wrap">
          <Reveal><h2 className="r-display r-xxl">¿Por dónde <Em>empiezas?</Em></h2></Reveal>
          <Reveal delay={120} className="r-final__ctas">
            {FINAL_CTAS.map(c => <Btn key={c.href} href={c.href} variant="dark">{c.label}</Btn>)}
          </Reveal>
        </div>
      </section>
    </>
  )
}
