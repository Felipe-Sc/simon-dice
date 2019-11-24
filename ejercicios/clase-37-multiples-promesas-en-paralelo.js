const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener al personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7] //cada elemento del array va a ser una promesa
//var promesas = ids.map(function (id) {
//  return obtenerPersonaje(id)
//}) Esta es otra manera de escribirlo, pero el arrow function es más legible

var promesas = ids.map(id => obtenerPersonaje(id))

Promise
  .all(promesas)
  .then(personaje => console.log(personaje))
  .catch(onError)
