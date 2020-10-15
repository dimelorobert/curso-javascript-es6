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
 * new Promise([ejecutor])
 *
 * vvéase tambien como:
 *
 * new Promise(function(resolver, rechazar) // Función ejecutora
 * {...código...}
 * )
 *
 *
 * Parámetros
 * ------------
 * [ejecutor]: Es una función con los argumentos 'resolve'(resolver) y 'reject(rechazar)'.
 * La función ejecutor es ejecutada inmediatamente por la implemención de la promesa, pasándole las funciones 'resolve' y 'reject'(el ejecutor es llamado incluso antes de que el constructor de la Promesa devuelva el objeto creado)
 *
 * Las funciones 'resolve' y 'reject', al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el 'ejecutor' inicia un trabajo asincrono, y luego una vez que es completado, llama a la función 'resolve' para resolver la promesa o la rechaza si ha ocurrido un error.
 *
 * Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.
 *
 *
 * Estados
 * ------------
 *
 * Una promesa puede encontrarse en alguno de los siguientes estados:
 *  -> Pendiente(pending) - Estado inicial, no cumplida o rechazada
 *  -> Cumplida(fulfilled)  - Significa que la operación se completó satisfactoriamente
 *  -> Rechazada(rejected)  - Significa que la operación falló
 *
 * Una promesa solo puede estar en un estado a la vez, puede pasar de pendiente a resuelta o a rechazada, pero jamás puede tener dos estados.
 *
 */
