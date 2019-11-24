const felipe = {
  nombre: 'Felipe',
  apellido: 'Merchan',
  altura: 1.71
}

const pippen = {
  nombre: 'Scottie',
  apellido: 'Pippen',
  altura: 2.3
}

const link = {
  nombre: 'Link',
  apellido: null,
  altura: 1.78
}

var personas = [felipe, pippen, link]

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasAltas, personasBajas)
console.log(personasCms)