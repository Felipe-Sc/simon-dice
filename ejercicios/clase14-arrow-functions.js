const felipe = {
  nombre: 'Felipe',
  edad: 18,
}

const pippen = {
  nombre: 'Pippen',
  edad: 34
}

const figueroa = {
  nombre: 'Figueroa',
  edad: 14
}

const rosalba = {
  nombre: 'Rosalba',
  edad: 'soy inmortal'
}

const MAYORIA_DE_EDAD = 18;

/* function esMayorDeEdad(persona) {
  const {edad} = persona
  return edad >= MAYORIA_DE_EDAD
} Es lo mismo a :*/
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad(persona) {
  const {edad} = persona
  const {nombre} = persona
  if (esMayorDeEdad(persona)) {
    console.log(`${nombre} es mayor de edad`)
  }
  else if (edad < 18){
    console.log(`${nombre} no es mayor de edad`)
  }
  else {
    console.log('Ese no es un dato de edad válido')
  }
}

function permitirAcceso(persona) {
  if (esMenorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
  else if (esMayorDeEdad(persona))
  {
    console.log('ACCESO PERMITIDO')
  }
}

permitirAcceso(figueroa)
imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(pippen)
imprimirSiEsMayorDeEdad(figueroa)
imprimirSiEsMayorDeEdad(rosalba)