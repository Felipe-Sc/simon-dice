const felipe = {
  nombre: 'Felipe',
  edad: 23,
  peso: 50
}

console.log(`Al comienzo del año ${felipe.nombre} pesaba ${felipe.peso} kg`)

const AUMENTAR_DE_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += AUMENTAR_DE_PESO
const adelgazar = persona => persona.peso -= AUMENTAR_DE_PESO

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const META = felipe.peso - 3
let dias = 1

while (felipe.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(felipe)
  }
  if (haceDeporte()) {
    adelgazar(felipe)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días para que ${felipe.nombre} bajara 3kg`)