import { CLIENT, getProgram, freebieCta } from '../config/client.js'
import { Reveal, Photo, Btn, Statement, InlineSparkle } from '../components/rebel/Blocks.jsx'
import { Sparkle, ClickBadge } from '../components/rebel/Objects.jsx'

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
  { label: 'Mentoría para crear tu marca personal', name: <>Black Moon <Em>Strategy</Em></>, href: '#black-moon' },
  { label: 'Membresía para crear tu contenido', name: <>Content <Em>Lab</Em></>, href: '#content-lab' },
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

const TE_SUENA = [
  'Intentas publicar en Instagram, pero con cero resultados.',
  'Saltas de un curso a otro intentando aprender marketing.',
  'Pruebas estrategias, pero al final ninguna funciona para ti.',
]

// [rosa, resto]: the part before "pero" is set in accent
const Y_AUN_ASI = [
  ['Tienes resultados buenísimos con tus clientas… ', 'pero no consigues atraer a más gente, no estás percibiendo lo que realmente mereces por el trabajo que haces y sigues dependiendo del boca a boca, o de que alguien te recomiende.'],
  ['Tienes ideas geniales para crear, ', 'pero no sabes cómo bajarlas a tierra, estructurarlas y venderlas de forma fácil.'],
  ['Tu misión es estar al servicio de los demás, ', 'pero el marketing te supera. Te suena complicado, y encima el que has conocido hasta ahora es demasiado masculino, enfocado a la venta agresiva… y tú no te reconoces ahí.'],
]

const PILLARS = [
  { n: '01', title: 'Identidad y estructura de marca', body: 'Construimos tu marca a 360°: desde tu identidad y tu posicionamiento, hasta el funnel completo de tu oferta. Pasas de tener ideas sueltas a convertirlas en un negocio con estructura real.' },
  { n: '02', title: 'Estrategia de contenido', body: 'Te enseño a sacarle partido a todo lo que eres. Tus dones, tu forma particular de hacer las cosas, tu manera de hablar, y a comunicarlo bien, para que no estés improvisando qué decir cada día y se convierta en algo que realmente te trae clientes.' },
  { n: '03', title: 'Comunidad y acompañamiento', body: 'No lo haces sola. Caminas junto a otras mujeres que están viviendo exactamente lo mismo que tú. Y caminas con alguien que te sostiene en todo el proceso: yo.' },
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
          <div className="r-hero__center">
            <Reveal>
              <h1 className="r-display r-lg r-hero__title">
                Existe una forma de construir tu negocio después de los 40 que no exige que lo sacrifiques todo por él.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="r-lead" style={{ marginTop: '32px' }}>
                Ayudo a mujeres con experiencia, talento y ganas de reinventarse a convertir lo que saben y lo que son en un negocio rentable, auténtico y sostenible.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="r-hand" style={{ marginTop: '16px' }}>Astrobranding · Marketing energético</p>
            </Reveal>
          </div>

          <div className="r-hero__cards">
            {HERO_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 90}>
                <a href={c.href} className="r-door">
                  <span className="r-door__label">{c.label}</span>
                  <ClickBadge label={CLIENT.ui.clickHere} className="r-door__badge" />
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
      <section className="r-sec r-paper r-pad">
        <div className="r-wrap">
          <div className="r-head-split">
            <Reveal><h2 className="r-display r-xl">Esto es para ti <Em>si…</Em></h2></Reveal>
            <Reveal delay={100}>
              <p className="r-lead">Tienes más de 40 años, una experiencia que vale oro y la sensación de que ha llegado el momento de construir algo propio.</p>
            </Reveal>
          </div>
          <ol className="r-numlist">
            {FOR_YOU.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <Sparkle className="r-star" color="var(--accent)" style={{ animationDelay: `${-i * 0.45}s` }} />
                <span className="r-numlist__t">{t}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 3b · ¿Te suena esto? */}
      <Statement hand="¿Te suena esto?" typed={TE_SUENA} padBottom="clamp(40px, 5vw, 72px)">
        Estás haciendo todo lo que <InlineSparkle /> crees que <i>“deberías”</i> hacer para que tu negocio funcione.
      </Statement>

      {/* 3c · Y aun así */}
      <section className="r-sec r-light r-pad r-rule-top" style={{ paddingTop: 'clamp(48px, 6vw, 88px)' }}>
        <div className="r-wrap">
          <Reveal><h2 className="r-display r-xl">Y aun <Em>así…</Em></h2></Reveal>
          <div className="r-three">
            {Y_AUN_ASI.map(([pink, rest], i) => (
              <Reveal key={i} delay={i * 90} className="r-three__item">
                <p className="r-lead"><strong className="r-pink">{pink}</strong>{rest}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Mi metodología */}
      <section id="sobre" className="r-sec r-dark r-pad r-rule-top">
        <div className="r-wrap">
          <Reveal><Eyebrow>Mi método</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="r-display r-xl">
              Astrobranding<br />
              <Em>+ Marketing energético</Em>
            </h2>
          </Reveal>

          <div style={{ marginTop: 'clamp(48px, 6vw, 88px)', maxWidth: '980px' }}>
            <Reveal>
              <p className="r-lead r-lead--xl">Un método propio que no vas a encontrar en ningún curso genérico de marketing.</p>
            </Reveal>
            <ul className="r-stars">
              <Reveal as="li" delay={80}>
                <Sparkle className="r-star" color="var(--accent)" />
                <span>Tu marca tiene que ser un reflejo exacto de quién eres, a nivel estratégico, psicológico y energético.</span>
              </Reveal>
              <Reveal as="li" delay={160}>
                <Sparkle className="r-star" color="var(--accent)" style={{ animationDelay: '-1.4s' }} />
                <span>El mapa exacto de tu negocio se encuentra en una herramienta que casi nadie mira: tu <span className="r-hand r-stars__hand">Carta Natal</span></span>
              </Reveal>
            </ul>
          </div>

          <div className="r-pillars">
            <Reveal><h3 className="r-display r-md">Los 3 pilares de <span className="r-brandname">{CLIENT.wordmark}</span></h3></Reveal>
            <div className="r-pillars__cards">
              {PILLARS.map((c, i) => (
                <Reveal key={c.n} delay={i * 90} className="r-mcard">
                  <span className="r-num">{c.n}</span>
                  <p className="r-mcard__title"><Em>{c.title}</Em></p>
                  <p className="r-text">{c.body}</p>
                </Reveal>
              ))}
            </div>
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
