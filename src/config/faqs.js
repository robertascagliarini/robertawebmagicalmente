/**
 * FAQs per program — shared by the page accordion (.jsx) and the
 * FAQPage JSON-LD schema (.astro), so both always match.
 */

export const bmsFaq = [
  { q: '¿Necesito saber de tecnología o de marketing para entrar?', a: 'No. Empezamos desde donde estés, aunque hoy no sepas ni cómo configurar bien tu Instagram. Te lo explico todo paso a paso.' },
  { q: '¿Y si tengo tantas habilidades distintas que no sé por dónde empezar a estructurarlas?', a: 'Ese es exactamente el trabajo de la primera fase: ahí es donde ordenamos todo lo que sabes hacer en una identidad de marca clara y en una sola oferta potente.' },
  { q: '¿Cuánto dura el proceso y cómo es el acompañamiento?', a: 'Son 10 semanas, una sesión en vivo conmigo cada semana, con acompañamiento durante todo el proceso, revisando lo que vas construyendo y ajustando contigo hasta que todo encaje.' },
  { q: '¿Esto funciona aunque nunca haya tenido un negocio propio?', a: 'Sí. Muchas de las mujeres que empiezan Black Moon Strategy vienen de años trabajando para otros, o de una idea que llevaban tiempo dándole vueltas sin saber cómo aterrizarla. Aquí la aterrizamos juntas y la convertimos en un negocio rentable.' },
]

export const labFaq = [
  { q: '¿Necesito tener ya un negocio montado para entrar?', a: 'No necesariamente, pero sí te ayuda tener claro qué ofreces. Si todavía estás definiendo tu identidad de marca y tu oferta desde cero, quizás Black Moon Strategy sea el paso previo — y luego el LAB te acompaña en el día a día del contenido.' },
  { q: '¿Cuánto tiempo tengo que dedicarle cada semana?', a: 'Con el sistema del Content Diary y el calendario ya pensado, en poco tiempo puedes tener listo todo el contenido de la semana. Y puedes adaptarlo a tu ritmo: usar todas las piezas, o solo las que te dé tiempo esa semana.' },
  { q: '¿Qué pasa si me pierdo una semana o una masterclass?', a: 'No pasa nada. Las masterclass en directo quedan grabadas para que las veas cuando puedas.' },
  { q: '¿Es solo para un tipo de negocio concreto?', a: 'No. El LAB es para expertas, coaches y terapeutas con perfiles distintos, que comparten el mismo reto: comunicar su valor de forma que atraiga clientes.' },
]

export const darkroomFaq = [
  { q: '¿Tengo que escuchar todo desde el principio?', a: 'No. Entras y accedes directamente a lo que está activo ahora, incluido el Reto de Visibilidad.' },
  { q: '¿Cuánto tiempo tengo que dedicarle?', a: 'Los audios son breves, pensados para encajar en tu día sin que tengas que sacar un hueco especial para ellos.' },
  { q: '¿Es gratis?', a: 'Sí. Es mi compromiso con cada mujer que quiere libertad económica y financiera. Lo cuido y lo nutro igual que cualquier otro espacio de pago. Si en algún momento quieres ir más a fondo con mi acompañamiento personalizado, ahí están Black Moon Strategy y The Content Lab, pero Darkroom no tiene ningún coste ni compromiso.' },
]

export function faqSchema(items) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  })
}
