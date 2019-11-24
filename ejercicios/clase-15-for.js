const felipe = {
  nombre: 'Felipe',
  edad: 23,
  peso: 50
}

console.log(`Al comienzo del año ${felipe.nombre} pesaba ${felipe.peso} kg`)

const AUMENTAR_DE_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += AUMENTAR_DE_PESO
const adelgazar = persona => persona.peso -= AUMENTAR_DE_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    /* adelgazar */
    aumentarDePeso(felipe)
  } else if (random < 0.50) {
    /* aumentarDePeso */
    adelgazar(felipe)
  }

}

console.log(`Al final del año ${felipe.nombre} pesó ${felipe.peso.toFixed(1)} kg`)