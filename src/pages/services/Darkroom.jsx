import { CLIENT, programCta } from '../../config/client.js'
import {
  HeroPhoto, Split, DarkPhoto, Boxes, FeelList, Vol, Checklist, FAQ, FinalCTA,
} from '../../components/rebel/Blocks.jsx'
import { Vinyl } from '../../components/rebel/Objects.jsx'
import { darkroomFaq } from '../../config/faqs.js'

const cta = programCta('darkroom')

export default function Darkroom() {
  return (
    <>
      <HeroPhoto
        title="Darkroom"
        titleClass="r-xxl"
        subtitle="Un canal de Telegram con audios breves, directos, para las mujeres que se niegan a construir un negocio mediocre."
        hand="Es gratis. Es tuyo."
        text="Posicionamiento energético, arquitectura de oferta, mensaje estratégico y recalibración de identidad — pensado para escuchar mientras caminas, cocinas o conduces."
        cta={{ href: cta, label: 'Quiero entrar a Darkroom' }}
      />

      <Split
        title="Eso es Darkroom."
        titleClass="r-lg"
        tone="dark"
        media={<div style={{ width: 'min(420px, 80%)' }}><Vinyl size="100%" /></div>}
        mediaPad
        cta={{ href: cta, label: 'Quiero entrar' }}
      >
        <p>No necesitas otro grupo de Telegram donde se acumulan notas de voz que nunca llegas a abrir. Tampoco necesitas apuntar mil ideas sueltas que después no sabes por dónde coger.</p>
        <p>Lo que en realidad buscas es algo más simple: entrar, escuchar, y saber exactamente qué hacer con eso hoy mismo en tu negocio.</p>
      </Split>

      <DarkPhoto rightTitle={['Esto es lo que', 'te ahorras']} leftTitle="Entrando en Darkroom">
        <p>Buscar en mil sitios distintos algo que te sirva de verdad para tu marca.</p>
        <p>Consumir contenido genérico que podría aplicarse a cualquiera, y por eso no te aplica a ti.</p>
        <p>Sentir que necesitas “estudiar” para poder avanzar en tu negocio.</p>
        <p>Quedarte sola dándole vueltas a lo mismo sin nadie con quien contrastarlo.</p>
      </DarkPhoto>

      <Boxes
        heading="Cómo es realmente Darkroom"
        items={[
          { big: '01', label: 'Audios breves', body: 'Pensados para escuchar en cualquier momento del día: caminando, cocinando, conduciendo.' },
          { big: '02', label: 'Un ritmo semanal', body: 'No es un archivo cerrado que escuchas una vez y se acaba, sino un espacio al que vuelves.' },
          { big: '03', label: 'Sin deberes', body: 'Sin necesidad de sentarte, apuntar nada ni “hacer los deberes”: cada audio te deja algo aplicable de forma directa.' },
          { big: '04', label: 'Acceso total', body: 'Desde el primer día que entras, sin depender de haber empezado desde el principio.' },
        ]}
      />

      <FeelList
        heading="Dentro de Darkroom vas a:"
        items={[
          ['Entender', 'qué está pasando ahora a nivel energético y cómo puede jugar a tu favor en tu negocio.'],
          ['Aprender', 'a estructurar lo que ya sabes hacer para que se pueda convertir en una oferta real.'],
          ['Encontrar', 'las palabras para comunicar tu valor sin sentir que estás “vendiendo”.'],
          ['Dejar', 'de sabotearte antes de empezar, con mentalidad de negocio aplicada, no teoría abstracta.'],
          ['Sentirte', 'acompañada por una comunidad de mujeres que están viviendo exactamente lo mismo que tú.'],
        ]}
      />

      <Vol
        first
        hand="Ahora mismo, dentro de Darkroom"
        title="Reto de Visibilidad"
        pink
        objectSide="left"
        image={CLIENT.photos.roberta}
        imagePosition="50% 35%"
        cta={{ href: cta, label: 'Quiero el reto de visibilidad' }}
      >
        <p>Justo ahora Júpiter está en Leo — una de las energías más potentes para visibilidad, expansión y protagonismo que existen. Y va a seguir así hasta mediados de 2027.</p>
        <p>Mientras dure esta temporada, dentro de Darkroom tienes activo un reto gratuito de visibilidad, pensado para aprovechar exactamente esta ventana energética y darle a tu marca el empujón que necesita ahora, no dentro de un año.</p>
        <p>Si vas a atreverte a mostrarte, este es el momento. Literalmente, el cielo está de tu lado.</p>
      </Vol>

      <Checklist
        heading="Darkroom es para ti si:"
        items={[
          'Estás empezando tu negocio después de los 40 y no quieres perder meses aprendiendo por ensayo y error.',
          'Tienes mucho conocimiento, pero te cuesta traducirlo en algo que otras personas entiendan y quieran.',
          'Sabes que necesitas moverte con las redes, pero la tecnología o la exposición te sigue costando.',
          'Ya no buscas más teoría: buscas algo que puedas escuchar hoy y aplicar hoy mismo.',
        ]}
        cta={{ href: cta, label: 'Quiero entrar a Darkroom' }}
      />

      <FAQ heading="Y ahora puede que te estés preguntando..." items={darkroomFaq} />

      <FinalCTA
        title="Es gratis. Es tuyo."
        sub="Solo tienes que entrar."
        pink={['Entra, escucha, y empieza a conocerme a mí y a una comunidad de mujeres que están exactamente donde tú estás ahora.']}
        cta={{ href: cta, label: 'Quiero entrar a Darkroom' }}
      />
    </>
  )
}
