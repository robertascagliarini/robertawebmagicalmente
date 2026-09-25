import { CLIENT, programCta } from '../../config/client.js'
import {
  HeroPhoto, Statement, Split, DarkPhoto, Folder, Boxes, HeadingPhotoSplit, Vol, CenterCaps,
  PhotoStatement, FeelList, Pricing, Meet, FAQ, FinalCTA, Polaroid, Hi, InlinePill,
} from '../../components/rebel/Blocks.jsx'
import { Cassette, NatalWheel } from '../../components/rebel/Objects.jsx'
import { labFaq } from '../../config/faqs.js'

const cta = programCta('lab')

export default function TheContentLab() {
  return (
    <>
      <HeroPhoto
        title="The Content Lab"
        titleClass="r-xxl"
        subtitle="El sistema semanal para que tu contenido deje de ser un ejercicio de adivinar, y se convierta en la razón por la que te encuentran, confían en ti y te contratan."
        text="Cada semana recibes tu contenido pensado a partir de lo que ya vives en tu negocio, con un objetivo claro detrás de cada pieza, feedback directo mío, y el respaldo de una comunidad de mujeres construyendo negocios alineados con quienes son."
        cta={{ href: cta, label: 'Quiero entrar al Lab' }}
      />

      <Statement
        hand="Si estás aquí es porque seguramente esto te suena:"
        typed={[
          'Ideas apuntadas en las notas del móvil que luego nunca usas.',
          'Publicar cualquier cosa, y ni siquiera querer volver a verlo porque te ha quedado fatal.',
          'Meter toda tu energía en un post... y quedarte en las mismas 200 visualizaciones y los mismos 5 likes de siempre.',
        ]}
      >
        Horas delante <InlinePill src={CLIENT.photos.roberta} position="50% 28%" /> de la pantalla sin saber qué escribir.
      </Statement>

      <Split
        title="Eres una mujer brillante."
        titleClass="r-lg"
        media={<NatalWheel size={440} color="var(--primary)" labels={['Captar', 'Autoridad', 'Venta', 'Conexión']} />}
        mediaPad
      >
        <p>Tu trabajo literalmente mejora vidas. Tienes experiencia, conocimientos, capacidades increíbles.</p>
        <p><strong>Y aun así, tus posibles clientes ni siquiera saben que existes.</strong></p>
      </Split>

      <DarkPhoto
        rightTitle={['La realidad', 'es esta']}
        leftTitle="The Content Lab"
        cta={{ href: cta, label: 'Quiero crear contenido que venda' }}
      >
        <p>Sabes que tienes mucho que ofrecer, pero no consigues plasmarlo en un negocio que realmente te sostenga económicamente.</p>
        <p>Sientes que deberías estar más presente en redes, pero te agota solo pensar en todo lo que tendrías que publicar.</p>
        <p>Sabes perfectamente quién eres y todo lo que vales, pero no consigues comunicarlo a través de tu marca y por eso tu valor no se está viendo.</p>
        <p style={{ color: 'var(--accent)', marginTop: '2em' }}>The Content Lab no va de recetas que sirven igual para cualquiera. Va de aprender a crear contenido desde lo que ya estás viviendo en tu negocio, hoy, esta semana. Nunca más empiezas desde una hoja en blanco.</p>
      </DarkPhoto>

      <Folder tab="Mi sistema">
        <p><Hi>Mi sistema: contenido que nace de lo que vives y que conecta con la energía disponible.</Hi></p>
        <p>Antes de escribir nada, trabajamos con tu <Hi>Content Diary</Hi>: un pequeño diario de CEO donde recoges lo que has vivido esa semana en tu negocio: conversaciones, aprendizajes, resultados, algo que te haya llamado la atención. De ahí salen las ideas que se convierten en tu contenido de la semana.</p>
        <p>Cada pieza tiene además su lugar y su energía: hay un momento para captar audiencia nueva, un momento para posicionarte como alguien metódico y fiable, un momento para la venta directa, y un momento para conectar y humanizar tu marca.</p>
        <p>No creamos contenido al azar, sino una estrategia completa repartida a lo largo de la semana, siguiendo el mismo sistema de ciclos energéticos que uso yo para crear mi propio contenido.</p>
      </Folder>

      <Boxes
        heading="Esto es lo que recibes cada semana dentro del LAB"
        items={[
          { big: '01', body: 'Tu calendario estratégico de contenido, con gancho, guión y objetivo claro en cada pieza.' },
          { big: '02', body: 'Calendario de Stories basado en mi método Smart Story System, para estar siempre presente en el top of mind de tu audiencia.' },
          { big: '03', body: 'Ganchos testados para crear retención en tu audiencia.' },
          { big: '04', body: 'Un espacio para plantear tus dudas y recibir mi feedback cada semana.' },
          { big: '05', body: 'Recursos y estrategias extra que comparto en tiempo real dentro de la comunidad.' },
          { big: '06', body: 'Dos encuentros grupales al mes en directo conmigo por Zoom que incluyen masterclass de contenido y gestión de negocio, y sesión de content coaching donde auditamos juntas tus posts.' },
        ]}
      />

      <HeadingPhotoSplit
        title="¿Es para ti?"
        sub="Esto no es para todo el mundo. Pero si te reconoces en alguna de estas, sigue leyendo."
      />

      <Vol first hand="Perfil uno" title="La que le tiene miedo a la tecnología" object={<Cassette label="Tecnología" side="A" rotate={-9} />}>
        <p>No sabes literalmente cómo configurar bien tu perfil de Instagram, ni cómo grabarte sin que te dé vergüenza.</p>
        <p>No es que no tengas nada que decir… es que todo lo demás te bloquea antes de llegar a decirlo.</p>
      </Vol>
      <Vol hand="Perfil dos" title="La que tiene un negocio que se quedó atrás" objectSide="left" object={<Cassette label="Online" side="B" rotate={-5} />}>
        <p>Llevas años con tu negocio, pero nunca lo adaptaste a la era online.</p>
        <p>Ves que el mundo se movió a las redes y tú te quedaste mirando desde fuera, sin saber por dónde empezar a ponerte al día.</p>
      </Vol>
      <Vol hand="Perfil tres" title="La que solo vende por el boca a boca" object={<Cassette label="Boca a boca" side="A" rotate={-8} tone="dark" />}>
        <p>Tus clientas te adoran, pero todas llegan porque alguien te recomendó.</p>
        <p>No tienes ningún sistema para que te encuentre gente nueva, y sabes que así tu negocio tiene un techo.</p>
      </Vol>
      <Vol hand="Perfil cuatro" title="La que por fin tiene tiempo, y no sabe por dónde empezar" pink objectSide="left" image={CLIENT.photos.roberta} imagePosition="50% 55%">
        <p>Tus hijos ya no te necesitan como antes, tu relación de años ya no te llena, tu antiguo trabajo se ha vuelto insostenible.</p>
        <p>Y por primera vez en años sientes que tienes tiempo y energía para algo tuyo. Pero las redes son un mundo que nunca te ha tocado explorar, y no sabes cuál es el primer paso.</p>
      </Vol>

      <CenterCaps cta={{ href: cta, label: 'Quiero estar dentro' }}>
        <p>Esto no es para ti si solo buscas ideas sueltas para “rellenar” tu feed sin ningún propósito detrás, o si esperas que alguien publique por ti sin que tú tengas que involucrarte nada.</p>
      </CenterCaps>

      <Split
        title="Cómo funciona el LAB"
        titleClass="r-lg"
        tone="dark"
        reverse
        media={<Polaroid src={CLIENT.photos.roberta} rotate={6} position="50% 22%" />}
      >
        <p>Cada domingo sale el nuevo calendario de contenido de la semana, directo, listo para adaptar a tu negocio.</p>
        <p>Dentro tienes salas para todo lo que necesitas: para presentarte y darte a conocer, para dejar tus dudas y recibir feedback, para conectar con otras mujeres del LAB, y para celebrar tus resultados de la semana.</p>
        <p>No es el típico calendario de contenido que descargas y usas sola. Es una comunidad viva de emprendedoras que están construyendo negocios alineados con quienes son, con espacio para el networking, y conmigo presente cada semana en tu bolsillo, ayudándote a mantener el rumbo cuando no sabes por dónde seguir.</p>
      </Split>

      <PhotoStatement
        title="El efecto de publicar con estrategia, semana tras semana"
        body={
          <>
            <p>Un post suelto no construye nada. Pero varias semanas seguidas de contenido con un objetivo claro detrás, sí.</p>
            <p style={{ marginTop: '1em' }}>Con el tiempo dejas de sentir que cada vez que quieres vender algo tienes que empezar de cero para “calentar” a tu audiencia. La gente que te sigue ya te conoce, ya confía en ti, ya sabe qué haces — porque llevas semanas mostrándoselo claramente.</p>
          </>
        }
        cta={{ href: cta, label: 'Quiero esta constancia' }}
      />

      <FeelList
        heading="Cada semana en el LAB vas a sentir"
        items={[
          ['El alivio', 'de no tener que enfrentarte sola a una hoja en blanco cada vez que tienes que publicar.'],
          ['La claridad', 'de saber exactamente qué decir y con qué objetivo, en lugar de improvisar.'],
          ['La confianza', 'de recibir feedback real sobre tu contenido, en vez de adivinar si está funcionando.'],
          ['El acompañamiento', 'de una comunidad que entiende exactamente lo que estás viviendo, porque lo vive contigo.'],
          ['El disfrute', 'de crear contenido, en lugar de vivirlo como una tarea pendiente más.'],
        ]}
      />

      <Pricing
        heading="La inversión"
        prices={[{ label: 'Membresía', value: '59€', unit: '/ mes' }]}
        cta={{ href: cta, label: 'Quiero entrar al Lab' }}
      />

      <Meet
        eyebrow="Coach de fortalezas · Astróloga · AstroBranding"
        title="Soy Roberta"
        tape="Por qué nace el LAB"
      >
        <p>Coach de fortalezas y experta en psicología positiva, astróloga especializada en astrología psicológica y AstroBranding.</p>
        <p>The Content Lab nace de algo que veo una y otra vez en las mujeres con las que trabajo: tienen el conocimiento, tienen la experiencia, y aun así se quedan calladas por no saber cómo comunicarlo.</p>
        <p>Aquí no te doy una fórmula genérica de contenido. Te ayudo a crear desde lo que ya eres y lo que ya vives en tu negocio — con estrategia, y con una comunidad detrás que te sostiene.</p>
      </Meet>

      <FAQ heading="Y ahora puede que te estés preguntando..." items={labFaq} />

      <FinalCTA
        titleClass="r-lg"
        title="Publica contenido de valor. Construye una audiencia que confía en ti."
        sub="Vende sin tener que estar todo el día vendiendo."
        pink={['Si est@ eres tú… entonces la puerta es por aquí']}
        cta={{ href: cta, label: 'Quiero entrar al Lab' }}
      />
    </>
  )
}
