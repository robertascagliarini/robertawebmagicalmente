import { CLIENT } from '../config/client.js'
import {
  AboutIntro, Statement, Split, Folder, DarkPhoto, PhotoStatement, Tracks, FinalCTA,
  Polaroid, Hi, InlineSparkle,
} from '../components/rebel/Blocks.jsx'
import { LilithCard, NatalWheel } from '../components/rebel/Objects.jsx'

const P = CLIENT.photos

export default function SobreMi() {
  return (
    <>
      <AboutIntro
        image={P.roberta}
        lead="¿Alguna vez te has preguntado por qué, sabiendo tanto y haciendo tan bien tu trabajo, tu negocio no acaba de despegar?"
        cta={{ href: '#historia', label: 'Mi historia ↓' }}
      >
        <p>Hola, soy Roberta. Mentora de marca personal, estratega de contenido, astróloga especializada en astrología psicológica y coach de fortalezas.</p>
        <p>Y antes de todo esto fui, y sigo siendo, otra cosa: una mujer con más de 30 años metida hasta el cuello en el mundo de los negocios, que un día decidió que ya estaba bien de hacerlo todo para los demás y empezó a hacerlo a su manera.</p>
        <p>Si estás aquí es porque probablemente te reconoces en esto: sabes muchísimo, tus clientas te aman, tu trabajo cambia vidas... y aun así el marketing te suena a un idioma que no es el tuyo. Y no lo es. Porque te lo enseñaron de forma equivocada.</p>
        <p>Aquí vas a encontrar otra forma de construir tu marca y tu negocio: la tuya.</p>
      </AboutIntro>

      <Statement
        id="historia"
        hand="Si quieres saber quién soy de verdad y de dónde viene todo esto, sigue leyendo."
        floater={<LilithCard width={190} rotate={9} />}
      >
        Mi historia <InlineSparkle /> <span className="r-italic">(versión larga)</span>
      </Statement>

      <Split
        handAbove="Capítulo uno"
        title="Origen"
        titleClass="r-lg"
        media={<Polaroid rotate={-6} />}
      >
        <p>Estudié lenguas y literaturas extranjeras y me licencié en Dirección de Empresas Turísticas, así que sí, antes de hablar de cartas natales, hablé de negocios, de números, de equipos.</p>
        <p>Mi primer trabajo me regaló 7 años viajando por el mundo, sumergiéndome en culturas fascinantes y acumulando experiencias que marcaron para siempre mi forma de ver la vida. Y una confesión: los viajes no son un lujo ni un hobby para mí, son parte fundamental de quién soy. Cada vez que llego a un lugar nuevo, lo primero que hago antes de deshacer la maleta es “leer” la energía de ese lugar. Miro su carta, entiendo qué energía se mueve ahí, analizo el terreno antes de pisarlo. No lo puedo evitar, y honestamente, me encanta.</p>
        <p>Durante más de 27 años gestioné equipos, trabajé en proyectos hoteleros y construí mi propia empresa. Y aunque nadie me lo iba a decir en su momento, todos esos años fueron mi verdadera escuela: ahí entendí cómo funciona un negocio de verdad, cómo se mueve el dinero, cómo se sostiene un equipo, y sobre todo, cómo se sostiene una misma cuando las cosas se complican.</p>
      </Split>

      <Folder tab="Sincronías">
        <p><Hi>Nieta de un abuelo quiromante y de otro cirujano. Sí, has leído bien.</Hi></p>
        <p>Desde niña crecí entre dos formas de mirar el mundo que, en teoría, no deberían llevarse bien: la de la bata blanca y el bisturí, y la de las líneas de la mano y lo que no se ve pero se siente.</p>
        <p>Y en vez de tener que elegir un bando, me quedé con los dos. Por eso hoy no me cuesta nada hablar de estrategia y de energía en la misma frase, sin que me tiemble la voz.</p>
        <p>Cuando tenía 7 años, mi abuela Enza me regaló mi primer libro importante: <em>Il grande libro della Mitologia</em>. Todavía lo conservo, como un tesoro. Me enganchó desde la primera página, y esos mitos se convirtieron en compañeros silenciosos que me acompañaron durante años, muchas veces sin que yo fuera consciente de ello.</p>
        <p>Con el tiempo entendí por qué: esos mismos mitos son los arquetipos que hoy uso para ayudarte a encontrar tu identidad de marca.</p>
        <p style={{ marginTop: '2.2em' }}><Hi>No es casualidad. Nunca lo es.</Hi></p>
      </Folder>

      <DarkPhoto
        rightTitle={['Búsqueda', 'Sol en Escorpio']}
        leftTitle="No te doy solo intuición. Te doy un mapa exacto."
      >
        <p>Como buena Sol en Escorpio, siempre sentí una atracción casi magnética hacia lo que hay debajo de la superficie de las personas. Me fascina el comportamiento humano, lo que mueve a alguien a decir sí o a decir no, lo que hay detrás de una decisión.</p>
        <p>Durante años exploré religiones, textos antiguos, corrientes filosóficas, técnicas de sanación. En paralelo, nunca dejé de lado mi lado más analítico y por eso me formé también como experta en Psicología Positiva.</p>
        <p>Siempre quise integrar ciencia y sabiduría ancestral para entender de verdad cómo funcionamos y ese cruce de ciencia y energía, de estructura y misterio, es exactamente lo que hoy aplico cuando leo tu carta natal para diseñar tu marca. No te doy solo intuición o inspiración. Te doy un mapa exacto.</p>
      </DarkPhoto>

      <PhotoStatement
        title="El giro: ¿y ahora qué?"
        body="Mis hijos crecieron. Y llegó ese momento, pasados los 45, en el que muchas mujeres se hacen la misma pregunta: ¿y ahora qué?"
      />

      <Split
        handAbove="Así nació MagicalMente"
        title="Yo decidí tener un hijo más."
        titleClass="r-lg"
        reverse
        media={<NatalWheel size={440} color="var(--primary)" labels={['Libertad', 'Emocional', 'Económica', 'Propia']} />}
        mediaPad
      >
        <p>Uno que no lloraba de noche, pero que me exigía igual de mucho: mi propio negocio. Nació de un deseo tremendo de libertad emocional y económica, las dos a la vez, porque una sin la otra, para mí, no cuenta como libertad de verdad.</p>
        <p>Así nació MagicalMente. Primero acompañando a mujeres en su desarrollo personal desde la astrología y la psicología positiva, cosa que sigo haciendo hoy.</p>
        <p>Fue a partir de ahí, escuchando a decenas de mujeres, cuando empecé a ver el mismo patrón una y otra vez: mujeres separadas o con relaciones que ya no les servían, que necesitaban independizarse económicamente. Mujeres agotadas de trabajar para otros, sabiendo que tenían el conocimiento y la preparación para brillar con algo propio. Mujeres con un negocio que ya existía, pero que se había quedado anticuado, porque el mundo se mueve al online y ellas se quedan mirando desde fuera.</p>
        <p><strong>Todas con algo en común: mucho que ofrecer, y ninguna estructura clara para convertirlo en un negocio que realmente las sostuviera.</strong></p>
      </Split>

      <Tracks
        eyebrow="Vocación"
        heading="Hoy tengo un propósito"
        intro="Enseñar a otras mujeres a alcanzar la misma libertad que vivo yo en este momento."
        items={[
          {
            hand: 'Ascendente',
            title: 'Virgo',
            sub: 'La maga de la estructura',
            body: ['Mi Ascendente Virgo me convierte en la maga de la estructura, la que necesita que todo tenga un porqué claro y entendible para diseñar contigo un negocio con pies y cabeza.'],
          },
          {
            hand: 'Luna en',
            title: 'Cáncer',
            sub: 'Un espacio que te sostiene',
            body: ['Mi Luna en Cáncer hace que trabajar conmigo no se sienta como una consultoría fría, sino como un espacio donde de verdad te sostienen, te guían, te acompañan y donde no estás tú sola frente a la pantalla resolviéndolo todo.'],
          },
          {
            hand: 'Sol en',
            title: 'Escorpio',
            sub: 'Mi don',
            body: ['Mi Sol en Escorpio es mi don: esa capacidad de “escanearte” a la primera para entender rápido quién eres tú, qué busca tu cliente ideal, y cómo convertir lo que ya sabes en algo que no se pueda evitar comprar.'],
          },
        ]}
        outro="Conmigo no hay fórmulas prefabricadas. Estoy aquí para ayudarte a construir un negocio que te represente al 100% y una vida en la que ese negocio no te robe la libertad que fuiste a buscar cuando lo empezaste."
      />

      <FinalCTA
        title="Si esto que acabas de leer te ha removido algo..."
        titleClass="r-lg"
        pink={['...sigue, porque justo aquí empieza lo bueno.']}
        cta={{ href: '/trabaja-conmigo', label: 'Trabaja conmigo' }}
      />
    </>
  )
}
