/** 
 * CONST:
 * Las variables constantes presentan un ámbito de bloque(block scope) tal y como lo hacen 
 * las variables definidas usando la instrucción 'let', 
 * con la particularidad de que el valor de una constante no puede cambiarse 
 * a través de la reasignación.Las constantes no se pueden redeclarar.
 * 
 * Fuente: https: //developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const
*/

/*
   Const, tiene el mismo comportamiento que 'let', salvo que no pueden ser reasignadas/referenciadas.
*/

 /** 
  * Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara.
  * Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, 
  * lo que tiene sentido, dado que no se puede cambiar posteriormente.
  * 
  * La declaración de una constante crea una referencia de sólo lectura.
  * No significa que el valor que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado, 
  * por lo tanto, en el caso de que la asignación a la constante sea un objeto, el objeto si que puede ser alterado.
  * 
  * Una constante no puede compartir su nombre con una función o variable en el mismo ámbito.
  * 
  * Todas las consideraciones acerca de la "zona muerta temporal/zona temporal de la muerte" 
  * se aplican tanto a letyconst.
 */