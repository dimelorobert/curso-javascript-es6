console.log(
  `%c■■■■■■■■■■■■■■■■■■■■■■■ \n■■■■ Async / Await ■■■■ \n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
  'font-weight: bold; color:lightgreen'
)
// https://randomuser.me/api/?results=5000

/**
 * ■■■■■■■■■■■■■■
 * Async
 * ■■■■■■■■■■■■■■
 *
 *
 * La declaración 'async' define una función, la cual devuelve un objeto AsyncFunction. Un objeto AsyncFunction, representa una función asíncrona que ejecuta el código contenido dentro de la función.
 *
 * Cuando se llama a 'async',   esta DEVUELVE UN ELEMENTO 'PROMISE'.
 * Cuando la función 'async' devuelve un valor, PROMISE se resolverá con un valor devuelto.
 * Si la función 'async' genera una excepción o algún valor, PROMISE se rechazará con el valor generado.
 */

/**
 * Uso de Async
 *
 * La palabra clave 'async' se coloca delante de una declaración de función para convertirla en una función asíncrona.
 *
 * Ejemplo:
 * function hola() { return 'Hola'}
 * hola() // Devuelve Hola
 *
 * Si usamos 'async':
 * function hola() { return 'Hola'}
 * hello() // Devuelve una Promise (PROMESA)
 *
 * Al invocar la función ahora devuelve una Promesa. Este es uno de los rasgos de las funciones asincronas, se garantiza que SUS VALORES DEVUELTOS SE CONVERTIRÁN EN PROMESAS.
 */

/**
 * Modos de uso
 *
 * 1- Como una función
 *
 * async function hola() { return 'Hola'}
 * hola()
 *
 *
 * 2- Como una expresión de función - function expresion
 *
 * let hola = async function() { return 'Hola'}
 * hola()
 *
 * 3- Con funciones de flecha -  arrow functions
 *
 * let hola = async () => { return "Hola" };
 *
 *
 * Para consumir el valor devuelto, ya que es devuelto en una promesa, podríamos hacer uso de .then()
 *
 * hola().then(respuesta => console.log(respuesta))
 *
 */

/**
 * EJEMPLOS PRACTICOS - async
 */

let hola = () => 'Hola'
console.log(hola()) // Devuelve Hola

let hola2 = async () => 'Hola'
console.log(hola2()) // Devuelve una promesa
// Por lo tanto accedemos al valor mediante el método .then()
hola2().then(respuesta => console.log(respuesta)) // Devuelve Hola

/**
 * ■■■■■■■■■■■■■■
 * Await
 * ■■■■■■■■■■■■■■
 *
 * El operador 'await' es usado PARA ESPERAR UNA PROMISE. Sólo puede ser usado dentro de una función async function.
 *
 * La expresión 'await' provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada y regresa a la ejecución de la función async después del término. Al regresar la ejecución, el valor de la expresión await es la regresada por una promesa terminada.
 *
 * Si la Promise es rechazada, el valor de la expresión await tendrá el valor de rechazo.
 * Si EL VALOR de la expresión SEGUIDA del operador AWAIT NO ES UAN PROMESA, SERÁ convertido a UNA RESOLVED PROMISE (PROMESA RESUELTA)
 *
 * NOTA: La función estática Promise.resolve retorna una Promise que es resuelta.
 *
 * Ejemplo:
 * let p = Promise.resolve([1,2,3]);
 * p.then(function(v) {
 *  console.log(v[0]); // 1
 * }
 *
 * p regresa como una promesa resuelta y estratada como tal para acceder a su valor
 *
 */

/**
 * Ejemplo 1
 *
 * Si una promise se pasa a una expresión AWAIT, espera que la PROMESA sea resuelta y devuelve el valor resuelto.
 *
 */

function resolverDespues2Segundos(valor) {
  // Promesa
  return new Promise(resolve => {
    setTimeout(() => resolve(valor), 2000)
  })
}

/* sync function miFuncion() {
  // Se asgina la promesa resuelta a la variable respuesta
  let respuesta = await resolverDespues2Segundos(10)
  // console.log(respuesta)
  return respuesta
} */

let miFuncion = async () => {
  // Se asgina la promesa resuelta a la variable respuesta
  let respuesta = await resolverDespues2Segundos(10)
  return respuesta
}

console.log('Promesa miFuncion', miFuncion()) //Devuelve una promesa
miFuncion().then(response =>
  console.log('Devuelve despues de 2 segundos', response)
) // Devuelve despues de 2 segundos: 10

/**
 * Ejemplo 2
 *
 * Si el valor NO es una PROMISE, CONVIERTE EL VALOR A UNA PRIMISE, y espera por dicho valor.
 *
 * async function miFuncion2(){
 *  let y = await 20
 *  console.log(y); // Devuelve el valor de 20
 * }
 *
 * miFuncion2()
 *
 */

async function miFuncion2() {
  // A pesar de que 200 no es una Promise,await devuelve el valor como una promesa resuelta
  let valor = await 200
  return valor
}

console.log('Promesa miFuncion2', miFuncion2()) // Devuelve una promesa
miFuncion2().then(response => console.log('Devuelve', response)) // Devuelve 200

/**
 * ■■■■■■■■■■■■■■■■■■
 * Control de Errores
 * ■■■■■■■■■■■■■■■■■■
 *
 * Para el manejo de erroes con asyn / await, tenemos 2 opciones.
 *  1.- try y catch : Dentro de nuestra función asincrona
 *  2.- .catch()    : Cuando se consume la función asincrona como una promesa.
 *
 */

/**
 * Ejemplo try y catch
 */

function obtenerClima(ciudad) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (ciudad === 'cdmx') {
        return resolve('Mayormente Nublado con 13°')
      } else {
        return reject('No se pudo obtener el clima 😭')
      }
    }, 3000)
  })
}

const obtenerTrafico = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve('Trafico fluido, tiempo al trabajo 20 mints aproximadamente'),
    3000
  )
})

const pronosticos = async () => {
  try {
    let clima = await obtenerClima('cdmx2')
    let trafico = await obtenerTrafico

    console.log(`${clima}\n${trafico}`)
  } catch (error) {
    console.log(`Error ${error}`)
  }
}

pronosticos()
// En este caso si es rechazada una promesa, la función asincrona pronosticos(), nos devolverá el catch -> Error No se pudo obtener el clima 😭

/**
 * Ejemplo .catch()
 */

const pronosticosP = async () => {
  let clima = await obtenerClima('cdmx2')
  let trafico = await obtenerTrafico

  return [clima, trafico]
}

pronosticosP()
  .then(([clima, trafico]) => console.log(`${clima}\n${trafico}`))
  .catch(error => console.log(error))

// En este caso si es rechazada una promesa, la función asincrona pronosticosP() nos devolverá un reject, por lo que el .cath() de la promesa mandará a consola -> No se pudo obtener el clima 😭
