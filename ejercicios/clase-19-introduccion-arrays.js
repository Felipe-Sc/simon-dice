const felipe = {
  nombre: 'Felipe',
  apellido: 'Merchan',
  altura: 1.71
}

const polilla = {
  nombre: 'Polilla',
  apellido: null,
  altura: 0.3
}

const link = {
  nombre: 'Link',
  apellido: null,
  altura: 1.78
}

var seresVivos = [felipe, polilla, link]

for (var i = 0; i < seresVivos.length; i++) {
  var seres = seresVivos[i]
  if (seres.altura < 1) {
    console.log(`${seres.nombre} mide ${seres.altura} centímetros`)
  } else if (seres.altura > 1) {
    console.log(`${seres.nombre} mide ${seres.altura} metros`)
  }
}