import { CLIENT } from '../config/client.js'
import {
  HeroPhoto, Statement, Split, DarkPhoto, WordmarkBand, Folder, HeadingPhotoSplit,
  Vol, Tracks, PhotoStatement, Meet, FinalCTA, Polaroid, Hi, InlinePill, InlineSparkle,
} from '../components/rebel/Blocks.jsx'
import { Cassette, LilithCard, NatalWheel } from '../components/rebel/Objects.jsx'

const P = CLIENT.photos

export default function Home() {
  return (
    <>
      <HeroPhoto
        image={P.roberta}
        position="50% 18%"
        titleClass="r-lg"
        maxWidth="1240px"
        title="Existe una forma de construir tu negocio después de los 40 que no exige que lo sacrifiques todo por él."
        subtitle="Estructura, marca y contenido — sin tener que hacerlo sola, y sin traicionar quién eres para conseguirlo."
        hand="Marca personal · Astrobranding · Marketing energético"
        cta={{ href: '/trabaja-conmigo', label: 'Empezar' }}
      />

      <Statement
        hand="¿Te suena esto?"
        floater={<LilithCard width={200} rotate={-8} />}
        typed={[
          'Intentas publicar en Instagram, pero con cero resultados.',
          'Saltas de un curso a otro intentando aprender marketing.',
          'Pruebas estrategias, pero al final ninguna funciona para ti.',
        ]}
      >
        Estás haciendo todo lo que <InlineSparkle /> crees que <span className="r-italic">“deberías”</span> hacer <InlinePill src={P.roberta} position="50% 28%" /> para que tu negocio funcione.
      </Statement>

      <Split
        title="Y aun así:"
        titleClass="r-lg"
        hand="Tu valor no se está viendo"
        media={<NatalWheel size={460} color="var(--primary)" labels={['Identidad', 'Oferta', 'Cliente', 'Voz']} />}
        mediaPad
      >
        <p>Tienes resultados buenísimos con tus clientas... pero no consigues atraer a más gente para vender. Sigues dependiendo del boca a boca, o de que alguien te recomiende.</p>
        <p>Le dedicas tu tiempo, tu energía y tu conocimiento a tus clientas... pero tú no estás percibiendo lo que realmente mereces por el trabajo que haces.</p>
        <p>Tienes ideas de servicios, programas, retiros... pero no sabes cómo estructurarlas para venderlas de forma fácil.</p>
        <p>Tu misión es estar al servicio de los demás, pero el marketing te supera. Te suena complicado, y encima el que has conocido hasta ahora es demasiado masculino, demasiado enfocado a la venta directa… y tú no te reconoces ahí.</p>
      </Split>

      <DarkPhoto
        rightTitle={['Tu energía', 'se agota:']}
        leftTitle="Y tu valor no se está viendo"
      >
        <p>Sabes que tienes mucho que ofrecer, pero no consigues plasmarlo en un negocio que realmente te sostenga económicamente.</p>
        <p>Sientes que deberías estar más presente en redes, pero te agota solo pensar en todo lo que tendrías que publicar.</p>
        <p>Sabes perfectamente quién eres y todo lo que vales, pero no consigues comunicarlo a través de tu marca y por eso tu valor no se está viendo.</p>
      </DarkPhoto>

      <WordmarkBand>Creé este espacio para ayudarte <br className="r-br" />a salir de ahí.</WordmarkBand>

      <Folder tab="El método">
        <p>Para enseñarte exactamente lo que vale tu trabajo, y que por fin te paguen lo que mereces por él. Para que obtengas los resultados que te has ganado hace tiempo.</p>
        <p>Y lo hago a través de mi propio método, uno que no vas a encontrar en ningún curso genérico de marketing:</p>
        <p><Hi>AstroBranding y Marketing Energético.</Hi></p>
        <p>Es el resultado de combinar más de 30 años de experiencia en negocios, con la sabiduría de la Astrología Psicológica, y con años ayudando a mujeres como tú a construir algo propio.</p>
        <p><Hi>Tu marca no debería ser un traje prestado.</Hi> Debería ser un reflejo exacto de cómo funcionas tú.</p>
        <p>Y para eso, hay algo que ya llevas contigo y que casi nadie mira: tu Carta Natal. Ahí está la información que necesitamos para diseñar tu identidad, tu oferta, tu cliente ideal y tu forma de comunicar, de manera que te resulte fácil, natural, sostenible.</p>
        <p style={{ marginTop: '2.2em' }}><Hi>Y sí, hasta divertida.</Hi></p>
      </Folder>

      <HeadingPhotoSplit
        image={P.roberta}
        position="50% 40%"
        title="Los 3 pilares de MagicalMente"
      />

      <Vol first hand="Pilar uno" title="Identidad y estructura de marca" object={<Cassette label="Identidad" side="A" rotate={-9} />}>
        <p>Construimos tu marca a 360°: desde tu identidad y tu posicionamiento, hasta el funnel completo de tu oferta.</p>
        <p>Pasas de tener ideas sueltas a convertirlas en un negocio con estructura real.</p>
      </Vol>
      <Vol hand="Pilar dos" title="Estrategia de contenido" objectSide="left" object={<Cassette label="Contenido" side="B" rotate={-6} />}>
        <p>Te enseño a sacarle partido a todo lo que eres. Tus dones, tu forma particular de hacer las cosas, tu manera de hablar, y a comunicarlo bien.</p>
        <p>Para que no estés improvisando qué decir cada día y se convierta en algo que realmente te trae clientes.</p>
      </Vol>
      <Vol hand="Pilar tres" title="Comunidad y acompañamiento" pink objectSide="left" image={P.roberta} imagePosition="50% 60%">
        <p>No lo haces sola.</p>
        <p>Caminas junto a otras mujeres que están viviendo exactamente lo mismo que tú. Y caminas con alguien que te sostiene en todo el proceso: yo.</p>
      </Vol>

      <Split
        title="¿Qué me hace diferente?"
        titleClass="r-lg"
        media={<Polaroid src={P.roberta} rotate={-7} position="50% 22%" />}
      >
        <p>No tengo miedo de meter en la misma frase “estructura” y “energía”.</p>
        <p>Llevo el marketing a un nivel energético, femenino y sobre todo, adaptable a la energía de cada mujer, no a una fórmula que sirve (o no sirve) para todas por igual.</p>
      </Split>

      <Tracks
        eyebrow="Mis fortalezas"
        items={[
          {
            hand: 'Fortaleza uno',
            title: 'Simplificar procesos complejos.',
            body: ['Te convierto lo difícil en fácil, te explico cada paso a paso de forma clara y ordenada, para que nunca te sientas perdida, y te ayudo a construir la estructura que le falta a tu negocio.'],
          },
          {
            hand: 'Fortaleza dos',
            title: 'Ir directo a lo profundo.',
            body: ['Entiendo rápido quién eres tú, qué busca tu cliente ideal, y cómo convertir tu conocimiento en un producto que no se pueda evitar comprar.'],
          },
          {
            hand: 'Fortaleza tres',
            title: 'Crear conexiones reales.',
            body: [
              'Me implico personalmente en cada proceso, tanto en mis comunidades como con mis alumnas.',
              'No soy la mentora inalcanzable a la que nunca llegas: soy la persona que está ahí, con los ojos puestos en tu negocio, acompañándote en todo el camino.',
            ],
          },
        ]}
      />

      <PhotoStatement
        title="Llevo más de 5 años ayudando a mujeres de más de 40"
        body="a crear o a estabilizar su negocio, para que puedan volver a enamorarse de él, vivir tranquilamente de su trabajo y recuperar la libertad económica y emocional que toda mujer merece."
        cta={{ href: '/sobre-mi', label: 'Conoce mi historia →' }}
      />

      <Meet
        eyebrow="Sé muy bien lo que necesitas:"
        title={<>Estructura <br />y libertad.</>}
        tape="¿Cómo lo hago, Roberta?"
      >
        <p>¡No te preocupes, de eso me encargo yo!</p>
      </Meet>

      <FinalCTA
        title={<>Aquí está <br />la clave 👇</>}
        cta={{ href: '/trabaja-conmigo', label: 'Trabaja conmigo' }}
      />
    </>
  )
}

