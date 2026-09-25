import { CLIENT, programCta } from '../../config/client.js'
import {
  HeroPhoto, CenterCaps, Statement, Split, DarkPhoto, Folder, Rows, Boxes, Tracks,
  PhotoStatement, FeelList, Pricing, Meet, FAQ, FinalCTA, Btn, Hi, InlineSparkle,
} from '../../components/rebel/Blocks.jsx'
import { LilithCard, NatalWheel } from '../../components/rebel/Objects.jsx'
import { bmsFaq } from '../../config/faqs.js'

const cta = programCta('bms')

export default function BlackMoonStrategy() {
  return (
    <>
      <HeroPhoto
        title="Black Moon Strategy"
        titleClass="r-xxl"
        subtitle="El sistema para construir tu marca personal después de los 40: identidad clara, oferta irresistible y contenido que vende, diseñados a partir de tu carta natal."
        text="En 10 semanas vas a tener tu marca personal completa y funcionando: identidad definida, funnel de venta completo y empaquetada y tu estrategia de contenido lista para atraerte clientes nuevos cada semana."
        cta={{ href: '#como-lo-hacemos', label: 'Quiero saber más' }}
      />

      <CenterCaps>
        <p>Creada para mujeres que llevan años sabiendo hacer su trabajo mejor que nadie, y que están cansadas de intentar meter todo eso en fórmulas de marketing que no les representan ni les funcionan.</p>
      </CenterCaps>

      <Statement
        hand="Y si te preguntas qué es la Black Moon…"
        floater={<LilithCard width={210} rotate={-8} />}
        typed={['Lilith.']}
      >
        Te presento uno de los arquetipos <InlineSparkle /> que más amo de una carta natal:
      </Statement>

      <Split
        title="Lilith"
        titleClass="r-xl"
        hand="La que se negó al molde"
        media={<NatalWheel size={460} color="var(--primary)" labels={['Lilith', 'Energía', 'Marca', 'Voz']} />}
        mediaPad
      >
        <p>Lilith es el punto de tu carta que representa a la mujer que se negó a someterse a un molde que no era el suyo, y que por eso fue apartada.</p>
        <p>Y esa es exactamente la energía que vas a encontrar en este programa: no vamos a meter tu marca en un molde de marketing genérico solo porque “así se hace”. Vamos a construirla desde tu propia energía, aunque eso signifique salirte de lo establecido.</p>
        <p>Olvídate de consejos y fórmulas de marketing genéricas que prometen lo mismo para todas. Vamos directo a lo que importa: convertir lo que ya sabes hacer en una marca clara que te represente a 360º, una oferta que se vende, y un sistema de contenido que por fin te traiga clientes.</p>
      </Split>

      <DarkPhoto rightTitle={['Lo que más deseas', 'ahora mismo']} leftTitle="Pero la realidad es esta">
        <p>Dejar de trabajar para el sueño de otra persona, y empezar a construir el tuyo.</p>
        <p>Que todo lo que sabes hacer, tus años de experiencia, tus técnicas, tu forma única de ayudar, por fin quepa en una oferta clara, en vez de en veinte servicios sueltos que ni tú misma sabes explicar en una frase.</p>
        <p>Cobrar lo que de verdad vale tu trabajo, en lugar de ver cómo el resultado de tu expertise se lo lleva otra persona.</p>
        <p>Sentir que ese pico de energía creativa que llega a partir de los 40 por fin puedes ponerla al servicio de algo tuyo.</p>
        <p style={{ color: 'var(--accent)', marginTop: '2.2em' }}>—</p>
        <p>Tienes la idea de negocio clarísima en tu cabeza desde hace tiempo. Lo que no tienes es cómo ponerla en marcha.</p>
        <p>Has probado a copiar lo que hacen otras que sí funcionan... y no ha servido de nada, porque lo que funciona para otra no tiene por qué funcionar para ti.</p>
        <p>La tecnología se te atraganta: ni idea de cómo montar bien tu Instagram, tu web, tu lista de email, o cómo plasmar quién eres en algo coherente.</p>
        <p>No sabes cómo crear ese recurso gratuito que atraiga gente nueva cada día hacia lo que ofreces.</p>
        <p>Estás en un momento personal que ya te va estrecho, y sabes que necesitas algo propio, algo que no dependa de nadie más.</p>
      </DarkPhoto>

      <Folder tab="Créeme" after={<Btn href={cta} variant="dark">Quiero activar mi marca</Btn>}>
        <p>Y aunque no lo digas en voz alta, hay algo que sabes con certeza:</p>
        <p><Hi>“Tengo muchísimo que dar. Y ahora mismo, casi nadie lo está viendo.”</Hi></p>
        <p>Créeme, sé cómo se siente estar ahí. Porque yo también pasé por ello. Y sé exactamente lo que necesitas:</p>
        <p><Hi>Un sistema que convierta todo lo que ya sabes en algo vendible, visible y que lleva tu firma energética incopiable.</Hi></p>
        <p>Ya sabes hacer lo que haces. Y lo haces bien. Lo que vamos a hacer aquí es coger todo eso que ya existe en ti y darle la estructura que le falta para convertirse en una marca y un negocio real.</p>
      </Folder>

      <Rows
        heading="Esto es lo que transformamos juntas"
        rows={[
          ['El “sé hacer de todo pero no sé venderlo”', 'Una oferta única, clara y empaquetada, que por fin representa todo tu valor.'],
          ['El trabajar para el sueño de otros', 'Un negocio propio que te paga lo que realmente vales.'],
          ['La idea de negocio que lleva meses solo en tu cabeza', 'Una estructura real, con pasos concretos, lista para lanzar.'],
          ['El “he copiado lo que hacen otras y no funciona”', 'Una estrategia diseñada específicamente para tu energía y tu cliente ideal.'],
          ['El bloqueo con la tecnología', 'Un sistema simple que entiendes y que puedes manejar tú sola.'],
          ['El “tengo tanto que dar pero nadie lo sabe”', 'Una marca visible, clara y elegible, que comunica exactamente quién eres y qué ofreces.'],
        ]}
      />

      <Boxes
        heading="Al terminar las 10 semanas, tienes en tus manos:"
        items={[
          { big: '01', label: 'Tu identidad de marca', body: 'Construida a partir de tu Carta Natal, coherente con quién eres, nada de trajes prestados.' },
          { big: '02', label: 'Tu oferta', body: 'Empaquetada y con un precio que refleja tu valor real.' },
          { big: '03', label: 'Tu landing page y tu lead magnet', body: 'Listos para atraer clientes nuevos de forma constante.' },
          { big: '04', label: 'Tu estrategia de contenido y storytelling', body: 'Que convierte tu experiencia real en algo que atrae, conecta y vende.' },
        ]}
        after="Todo esto construido conmigo, sesión a sesión, no en un curso grabado que ves sola y abandonas a la semana dos."
      />

      <Tracks
        id="como-lo-hacemos"
        eyebrow="Cómo lo hacemos"
        heading="10 sesiones, una por semana, repartidas en 3 fases"
        items={[
          {
            hand: 'Fase uno',
            title: 'The Core',
            sub: 'Identidad y esencia de marca',
            body: ['Construimos el núcleo de tu marca: tu identidad, tus arquetipos energéticos y tus fortalezas, hasta definir quién eres como marca y desde dónde te posicionas.'],
          },
          {
            hand: 'Fase dos',
            title: 'The Impact',
            sub: 'Estrategia y estructura',
            body: ['Diseñamos la estructura que convierte tu marca en un negocio: tu oferta, tu landing page, tu lead magnet, y el recorrido que lleva a tus clientas hasta ti.'],
          },
          {
            hand: 'Fase tres',
            title: 'The Voice',
            sub: 'Acción y visibilidad',
            body: ['Activamos tu voz: tu narrativa, tu estrategia de contenido, y una comunicación coherente con tu identidad y tu oferta, para que dejes de improvisar y empieces a comunicar con resultados.'],
          },
        ]}
        outro="BMS es un proceso guiado, con presencia constante y dirección clara. Durante todo el proceso estaré contigo, guiando decisiones, revisando lo que construyes y ayudándote a ajustar hasta que todo encaje."
        cta={{ href: cta, label: 'Quiero esta transformación' }}
      />

      <PhotoStatement
        title="¿Por qué ahora?"
        body={
          <>
            <p>Si tus hijos ya vuelan solos y te estás preguntando “¿y ahora qué?”. Si acabas de salir de una relación que no funciona y necesitas tu propio sostén económico. Si estás en ese momento en el que sientes que algo dentro de ti pide más. Escucha bien, porque nada de eso es casualidad.</p>
            <p style={{ marginTop: '1em' }}>A partir de los 40, muchas mujeres atraviesan uno de estos momentos pero también uno de los picos de energía creativa más potentes de su vida.</p>
          </>
        }
        hand="La pregunta no es si tienes lo necesario"
        rightTitle="Ya lo tienes."
        rightSub="Años de experiencia, conocimiento y ganas. La pregunta es si vas a seguir posponiéndolo, o si este es el momento en el que por fin te atreves a darle forma."
      />

      <FeelList
        heading="Al terminar Black Moon Strategy vas a sentir"
        items={[
          ['La tranquilidad', 'de tener una marca personal que por fin representa quién eres y todo lo que sabes hacer.'],
          ['La claridad', 'de saber exactamente qué ofreces, a quién, y cómo comunicarlo sin improvisar cada día.'],
          ['La seguridad', 'de tener un sistema propio para atraer clientes, en lugar de depender solo del boca a boca.'],
          ['La satisfacción', 'de cobrar por fin lo que tu trabajo realmente vale.'],
          ['La confianza', 'de saber que no lo hiciste sola: alguien caminó todo el proceso contigo.'],
        ]}
      />

      <Pricing
        heading="La inversión"
        prices={[
          { label: 'Pago único', value: '1.200€' },
          { label: 'Pago en 2 cuotas', value: '700€', unit: '/ cuota' },
        ]}
        cta={{ href: cta, label: 'Quiero estar dentro' }}
      />

      <Meet
        eyebrow="Mentora de marca personal · Coach de fortalezas · Astróloga"
        title="Soy Roberta"
        tape="Mi proyecto más ambicioso"
        image={CLIENT.photos.roberta}
      >
        <p>Mentora de marca personal, coach de fortalezas experta en psicología positiva, astróloga especializada en astrología psicológica y AstroBranding.</p>
        <p>Black Moon Strategy es mi proyecto más ambicioso. Y es mi propósito a la vez. Mi trabajo no va solo de crear marcas personales. Va de ayudarte a construir una vida y un negocio que te den libertad emocional y económica.</p>
        <p>Black Moon Strategy nace de mi propio recorrido: de dejar de adaptarme, de conocer mi energía, mis fortalezas, y de aprender a convertir todo eso en estructura y resultados.</p>
        <p>Aquí no te enseño fórmulas prefabricadas. Te guío con criterio y te sostengo en el proceso, porque tu éxito también es el mío: cuando una mujer encuentra su libertad, abre el camino para muchas más.</p>
      </Meet>

      <FAQ heading="Y ahora puede que te estés preguntando..." items={bmsFaq} />

      <FinalCTA
        titleClass="r-lg"
        title="¿Qué pasaría si alguien te mostrara cómo empaquetar todo lo que ya sabes en una marca que no puede pasar desapercibida?"
        pink={['Si est@ eres tú… entonces la puerta es por aquí']}
        cta={{ href: cta, label: 'Quiero estar dentro' }}
      />
    </>
  )
}
