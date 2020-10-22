/**
 * ===============
 * Promesa
 * ===============
 *
 * Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.
 *
 * El objeto 'Promise' es usado para computaciones asíncronas.
 * Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
 */

/**
 * ===============
 * Sintaxis
 * ===============
 *
 * new Promise(EJECUTOR)
 *
 * Donde: EJECUTOR -> función anónima (callback)
 * function(resolver, rechazar){
 *  ...código...
 * }
 *
 * Por consiguiente se representría de la siguiente forma:
 *
 * new Promise(function(resolver, rechazar) // Función ejecutora
 * {...código...}
 * )
 *
 *
 * Parámetros
 * ------------
 * EJECUTOR: Es una función(callback) con los argumentos 'resolve'(resolver) y 'reject(rechazar)'.
 * La función ejecutor es ejecutada inmediatamente por la implemención de la promesa, pasándole las funciones 'resolve' y 'reject'(el ejecutor es llamado incluso antes de que el constructor de la Promesa devuelva el objeto creado)
 *
 * new Promise(function(resolve, reject){
 * // Si funciona
 *  resolve()
 *
 * // Si falla
 * reject()
 * })
 *
 * Las funciones 'resolve' y 'reject', al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el 'ejecutor' inicia un trabajo asincrono, y luego una vez que es completado, llama a la función 'resolve' para resolver la promesa o la rechaza si ha ocurrido un error.
 *
 * Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.
 *
 * NOTA: Tanto 'resolve' y 'reject', reciben un argumento el cual es el valor que se deasea pasar cuando se consume la promesa.
 *
 *
 *
 * Estados
 * ------------
 *
 * Una promesa puede encontrarse en alguno de los siguientes estados:
 *  -> Pendiente(pending) : Estado inicial, no cumplida o rechazada
 *  -> Cumplida(fulfilled): Significa que la operación se completó satisfactoriamente
 *  -> Rechazada(rejected): Significa que la operación falló
 *
 * NOTA: Una promesa solo puede estar en un estado a la vez, puede pasar de pendiente a resuelta o a rechazada, pero jamás puede tener dos estados.
 *
 * Una vez que se cree nuestro objeto promise y se le haya pasado la función callback, tendremos a disposición 3 métodos para manejar nuestra promesa:
 *  -> then()     : Cuando el estado es cumplido(fulfilled)
 *  -> cath()     : Cuando el estado es rechazado(rejected), es usado para manejar el error.
 *  -> finally()  : Se ejecutará siempre despues de then() o catch(), no importa si haya ocurrido o no un error.
 *
 * const promesa = new Promise(EJECUTOR);
 *    promesa
 *        .then(function(argumento){...código...})
 *        .catch(function(argumento){...código...})
 *        .finally(function(){...código...})
 *
 * Estos 3 métodos reciben como argumento una función anónima, la cual contiene como argumento el valor enviado por los callbacks 'resolve' y 'reject', dentro de la función puede hacerse uso del parámetro enviado.
 */

// Decclaracion de una promesa
const promesa = new Promise(function (resolve, reject) {
  //Función Ejecutora
  console.log('Estado Pendiente... ♻') // Estado pendiente
  let suma = 4 + 5
  setTimeout(() => {
    if (suma === 9) {
      resolve('Esta promesa fue cumplida ✔') // Estado cumplida, se lanza callback con el valor a pasar como argumento
    } else {
      reject('Esta promesa fue rechazada ❌') // Estado rechazada, se lanza callback con el el error como argumento
    }
  }, 3000)

  setTimeout(() => {
    reject('Se rechazo la promesa ⚠') // Una promesa no puede tener dos estados, por lo que en este caso, la promesa se cumple y esto jamás se ejecuta. Si el primer timeout tuviera el mismo tiempo o uno mayor a este 2do timeout, la promesa se rechazaría. Pero jamás tendría dos estados o uno y despues otro.
  }, 10000)
})

// Uso de la promesa
promesa
  .then(function (response) {
    //Respuesta de la promesa cumplida, con el método .then() accedemos a la respuesta
    console.log(response)
  })
  .catch(function (error) {
    //Respuesta de la promesa rechazada, con el método .catch() accedemos al error
    console.log(error)
  })
  .finally(function () {
    // Éste método siempre se ejecutará al final de la promesa
    console.log('Fynally -> Promesa ejecutada')
  })

/**
 * Con las promesas manejamos procesos asincronos como si fueran sincronos, esto lo podemos ver mucho en una peticion a una API
 * En algunos casos vamos a querer ocupar un valor retornado por una promesa y enviarsela a otra función que dependa de ella.
 * Este valor no lo podemos tener en un inicio hasta ser resuelta la promesa, lo mas seguro es que si necesitamos un valor y aún no esta calculado nuestro interprete evalue el valor como undefined.
 * Cuando hacemos peticiones a una API es muy probable que se presenten estos casos, por fortuna las promesas nos permiten hacer una concatenación de promesas.
 * La concatenación de promesas se puede hacer con el mismo método .then(), mandando a llamar el método despues de otro .then() como se muestra a continuación.
 *
 * promesa
 * .then(function(){..code..})
 * .then(function(){..code..})
 * .catch()
 * .finally()
 *
 *
 * Para pasar un valor de un then a otro, hemos de retornar ese valor dentro de la funcion que recibe then:
 *
 * promesa()
 * .then(function(response){ // Recibimos el valor de la respuesta
 *  let valor = response;
 *  return valor; // Retornamos el valor que se desea usar en el siguiente .then()
 * })
 * .then(function(valor){ // Recibimos el valor enterior como argumento
 *  let suma = 5 + valor;
 * console.log(suma)
 * })
 */

const getNumber = new Promise(function (resolve, reject) {
  resolve(10)
})

getNumber
  .then(function (response) {
    return response // Pasamos el valor de 10 con el return
  })
  .then(function (data) {
    // Obtenemos el valor por parametro
    let suma = 5 + data // Podemos hacer uso del valor para gestionarlo
    console.log(`La suma total es: ${suma}`)
  })

/**
 * Simplificando la sintaxis usando arrow functions
 */

getNumber
  .then(response => response) // Retornamos implicitamente el response
  .then(data => {
    // obtenemos el valor
    let suma = 5 + data
    console.log(`La suma total es: ${suma}`)
  })
