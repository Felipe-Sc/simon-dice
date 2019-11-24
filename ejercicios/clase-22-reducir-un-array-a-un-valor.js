const felipe = {
  nombre: 'Felipe',
  apellido: 'Merchan',
  altura: 1.71,
  cantidadDeLibros: 17
}

const pippen = {
  nombre: 'Scottie',
  apellido: 'Pippen',
  altura: 2.3,
  cantidadDeLibros: 34
}

const link = {
  nombre: 'Link',
  apellido: null,
  altura: 1.78,
  cantidadDeLibros: 25
}

var personas = [felipe, pippen, link]

const reducer = (acumulador, { cantidadDeLibros }) => acumulador + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`Tenemos en total ${totalDeLibros} libros`)