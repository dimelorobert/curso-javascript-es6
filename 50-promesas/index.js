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
 *        .then()
 *        .catch()
 *        .finally()
 *
 */

const promesa = new Promise(function (resolve, reject) {
  console.log('Estado -> ♻ Pendiente...')
  let suma = 4 + 5
  setTimeout(() => {
    if (suma === 9) {
      resolve('Esta promesa fue ✔ cumplida')
    } else {
      reject('Esta promesa fue ❌ rechazada')
    }
  }, 3000)
})

promesa
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Promesa ejecutada'))
