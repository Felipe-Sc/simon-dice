function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const esAlto = ({ altura }) => altura > 1.8

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function () {
  if (esAlto(this)) {
    console.log(`Siendo un ${this.apellido} tenia que ser alto.`)
  }
}
var felipe = new Persona('Felipe', 'Merchan', 1.72)
var andres = new Persona('Andrés', 'Calamaro', 1.89)
var pippen = new Persona('Scottie', 'Pippen', 2.03)

const hablarSobreMi = (persona) => {
  persona.saludar()
  persona.soyAlto()
}

hablarSobreMi(felipe)
hablarSobreMi(andres)
hablarSobreMi(pippen)