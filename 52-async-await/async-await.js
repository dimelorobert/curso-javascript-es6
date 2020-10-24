console.log(
  `%c■■■■■■■■■■■■■■■■■■■■■■■ \n■■■■ Async / Await ■■■■ \n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
  'color: ; font-weight: bold; color:lightgreen'
)
// https://randomuser.me/api/?results=5000

/**
 * Async
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
 * let hola = async function hola() { return 'Hola'}
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
 * EJEMPLOS
 */

let hola = () => 'Hola'
console.log(hola()) // Devuelve Hola

let hola2 = async () => 'Hola'
console.log(hola2()) // Devuelve una promesa
// Por lo tanto accedemos al valor mediante el método .then()
hola2().then(respuesta => console.log(respuesta)) // Devuelve Hola
