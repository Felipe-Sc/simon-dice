const felipe = {
  nombre: 'Felipe',
  apellido: 'Merchan',
  edad: 23
}

const felipeMasViejo = cumpleanos(felipe)

function imprimirNombreYEdad(persona) {
  const { nombre, apellido, edad } = persona
  console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreYEdad(felipe)

function cumpleanos (persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}