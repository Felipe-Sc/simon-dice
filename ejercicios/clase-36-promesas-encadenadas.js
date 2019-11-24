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

obtenerPersonaje(1)
  .then(personaje1 => {
    //personaje es la data que nos llega desde resolve(11)
    console.log(`El personaje 1 es ${personaje1.name}`)
    //devolvemos una nueva promesa
    return obtenerPersonaje(2)
  })
  //para obtener el resultado del request (26) seguimos encadenando .then
  .then(personaje2 =>{
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje3 =>{
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje4 =>{
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje5 =>{
    console.log(`El personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje6 =>{
    console.log(`El personaje 6 es ${personaje6.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje7 =>{
    console.log(`El personaje 7 es ${personaje7.name}`)
  })
  .catch(onError)
    //nos llega el id del reject (13), además, si en cualquiera de estas
    //promesas sucede algún error el .catch() es el mismo para todos.
