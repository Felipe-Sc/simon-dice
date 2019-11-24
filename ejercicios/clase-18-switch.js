var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
  case 'libra':
    console.log('Siempre que intente exponer sus pensamientos internos, trate de adoptar una conducta diplomática si es que no quiere que el mundo se oponga contra usted.')
    break
  case 'aries':
    console.log('Durante esta jornada, tendrá la posibilidad de conectarse con su entorno de un modo simple y profundo. No desperdicie la oportunidad que le deparará esta jornada.')
    break
  case 'géminis':
  case 'geminis':
    console.log('Rompa con los prejuicios que vuelven del pasado y de vuelta la página. Momento para focalizarse en su futuro, ya que contará con energía muy positiva.')
    break
  default:
    console.log('Es signo no es válido')
}