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

function imprimirSiEsMayorDeEdad(persona) {
  const {edad} = persona
  const {nombre} = persona
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad`)
  }
  else if (edad < 18){
    console.log(`${nombre} no es mayor de edad`)
  }
  else {
    console.log('Ese no es un dato de edad válido')
  }
}

imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(pippen)
imprimirSiEsMayorDeEdad(figueroa)
imprimirSiEsMayorDeEdad(rosalba)


