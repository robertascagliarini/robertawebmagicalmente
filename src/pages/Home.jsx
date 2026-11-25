import { CLIENT, getProgram, freebieCta } from '../config/client.js'
import { Reveal, Photo, Btn, Statement, InlineSparkle } from '../components/rebel/Blocks.jsx'
import { Sparkle, ClickBadge } from '../components/rebel/Objects.jsx'

const bms = getProgram('bms')
const lab = getProgram('lab')

// Italic + accent word inside a heading
function Em({ children }) {
  return <em className="r-em">{children}</em>
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

// [rosa, resto]: the part before "pero" is set in the pink hand font
const Y_AUN_ASI = [
  ['Tienes resultados buenísimos con tus clientas… ', 'pero no consigues atraer a más gente, no estás percibiendo lo que realmente mereces por el trabajo que haces y sigues dependiendo del boca a boca, o de que alguien te recomiende.'],
  ['Tienes ideas geniales para crear, ', 'pero no sabes cómo bajarlas a tierra, estructurarlas y venderlas de forma fácil.'],
  ['Tu misión es estar al servicio de los demás, ', 'pero el marketing te supera. Te suena complicado, y encima el que has conocido hasta ahora es demasiado masculino, enfocado a la venta agresiva… y tú no te reconoces ahí.'],
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
                Crea tu negocio <span className="r-hero__pink">después de los 40</span>
                <span className="r-hero__sub">sin ser una experta en marketing, tecnología y redes sociales.</span>
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
            <Reveal><h2 className="r-display r-xl">Este es tu lugar <Em>si…</Em></h2></Reveal>
            <Reveal delay={100}>
              <p className="r-lead">Tienes más de 40 años, una experiencia que vale oro y la sensación de que ha llegado el momento de construir algo tuyo.</p>
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
                <p className="r-hand r-three__hand">{pink}</p>
                <p className="r-lead r-three__text">{rest}</p>
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
        </div>
      </section>

      {/* 5 · Servicios */}
      <section id="servicios" className="r-sec r-light r-pad">
        <div className="r-wrap">
          <Reveal><h2 className="r-display r-xl">Empieza a hacer <Em>magia</Em> con tu negocio</h2></Reveal>
          <div className="r-two r-two--cards" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            <Reveal id="black-moon" className="r-svc r-svc--dark">
              <Eyebrow>01 · Mentoría privada</Eyebrow>
              <h3 className="r-display r-lg r-svc__title">Black Moon <Em>Strategy</Em></h3>
              <p className="r-text">Transforma tu identidad, tu experiencia y tu potencial en una marca personal sólida, diferenciada y alineada con tu energía, partiendo de tu carta natal.</p>
              <div className="r-svc__cta"><Btn href={bms.href} variant="pink">Descubre Black Moon Strategy →</Btn></div>
            </Reveal>
            <Reveal id="content-lab" delay={100} className="r-svc">
              <Eyebrow>02 · Laboratorio de creación de contenido en Instagram</Eyebrow>
              <h3 className="r-display r-lg r-svc__title">Content <Em>Lab</Em></h3>
              <p className="r-text">Deja de publicar de forma improvisada y agotadora y crea una estrategia de comunicación coherente con tu voz. Contenido de Instagram adaptado para ti, formación semanal en directo conmigo y una comunidad de mujeres como tú.</p>
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
              <p className="r-lead">Mi universo tiene la puerta abierta. Si quieres probar cómo es trabajar conmigo, empieza con uno de estos dos primeros pasos gratuitos.</p>
            </Reveal>
          </div>

          <div className="r-two r-two--cards">
            <Reveal id="reto" className="r-free">
              <div className="r-free__labels"><span>Reto gratuito de visibilidad</span><span>Júpiter en Leo</span></div>
              <h3 className="r-display r-xl r-free__big">Luces, cámara, <Em>visibilidad</Em></h3>
              <p className="r-text r-free__sub">7 días para dejar de esconder tu marca y comunicar lo que te hace única con la energía de Júpiter en Leo.</p>
              <div className="r-svc__cta"><Btn href={freebieCta('reto')} variant="dark">Únete gratis al reto →</Btn></div>
            </Reveal>

            <Reveal id="consultoria" delay={100} className="r-free">
              <div className="r-free__labels"><span>Consultoría de visibilidad</span><span>Instagram</span></div>
              <p className="r-display r-xl r-free__big">30 minutos <Em>conmigo</Em></p>
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
              <Reveal delay={80}><h2 className="r-display r-xl">Hola, soy <Em>{CLIENT.legalName.split(' ')[0]}</Em></h2></Reveal>
              <Reveal delay={140}>
                <p className="r-lead" style={{ marginTop: '32px' }}>Combino estrategia de negocio, marca personal, marketing, comunicación, psicología y astrología aplicada al branding para que construyas un proyecto profesional que refleje quién eres y te dé autonomía y libertad.</p>
                <div style={{ marginTop: '32px' }}><Btn href="/sobre-mi" variant="outline">Te cuento mi historia (versión larga) →</Btn></div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Photo src={CLIENT.photos.roberta} alt={`Retrato de ${CLIENT.legalName}`} position="50% 22%" className="r-founder__photo" />
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
