import { getProgram } from '../config/client.js'
import { Statement, Vol, InlineSparkle } from '../components/rebel/Blocks.jsx'
import { Cassette } from '../components/rebel/Objects.jsx'

const bms = getProgram('bms')
const lab = getProgram('lab')
const darkroom = getProgram('darkroom')

export default function TrabajaConmigo() {
  return (
    <>
      <Statement
        hand="Trabaja conmigo"
        after={
          <p className="r-sub" style={{ marginTop: '44px', maxWidth: '760px', fontSize: 'clamp(18px, 1.8vw, 26px)' }}>
            Si crees que estás lista para lograrlo, aquí tienes las formas en las que puedes trabajar conmigo. <span className="r-pink">⥥</span>
          </p>
        }
      >
        ¿Cómo creas tu libertad <InlineSparkle /> económica y emocional después de los 40?
      </Statement>

      <Vol
        first
        hand="Vol. uno"
        title={bms.name}
        object={<Cassette label="Black Moon" side="A" rotate={-9} />}
        cta={{ href: bms.href, label: 'Quiero saber más' }}
      >
        <p>El sistema para construir tu marca personal después de los 40: identidad clara, oferta irresistible y contenido que vende, diseñados a partir de tu carta natal.</p>
        <p>En 10 semanas vas a tener tu marca personal completa y funcionando.</p>
      </Vol>

      <Vol
        hand="Vol. dos"
        title={lab.name}
        objectSide="left"
        object={<Cassette label="Content Lab" side="B" rotate={-5} tone="dark" />}
        cta={{ href: lab.href, label: 'Quiero entrar al Lab' }}
      >
        <p>El sistema semanal para que tu contenido deje de ser un ejercicio de adivinar, y se convierta en la razón por la que te encuentran, confían en ti y te contratan.</p>
      </Vol>

      <Vol
        hand="Vol. tres"
        title={darkroom.name}
        pink
        object={<Cassette label="Darkroom" side="A" rotate={7} />}
        cta={{ href: darkroom.href, label: 'Quiero entrar a Darkroom' }}
      >
        <p>Un canal de Telegram con audios breves, directos, para las mujeres que se niegan a construir un negocio mediocre.</p>
        <p>Es gratis. Es tuyo. Solo tienes que entrar.</p>
      </Vol>
    </>
  )
}
