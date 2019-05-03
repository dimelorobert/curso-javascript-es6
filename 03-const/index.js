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

const CONSTANTE = 23;

console.log("Mi constante es: " + CONSTANTE);
/* 
   NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,
   pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas
*/

// Si reasignamos el valor lanzara un error: Unkeught TypeError: Asignación a variable constante.
// CONSTANTE = 20; // NO SE PUEDEN REASIGNAR VALORES

console.log("Mi constante favorita es: " + CONSTANTE);

// lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'CONSTANTE' ya ha sido declarado
// const CONSTANTE = 46; // NO se puede redeclarar
// let CONSTANTE = 89;
// var CONSTANTE = 50;

if (CONSTANTE === 23) {
  const CONSTANTE = 32;

  console.log("Mi variable const de bloque es: " + CONSTANTE);
  // 'const' al igual que 'let' puede declarar un alcance de bloque/ambito, que solo vive dentro
  // de las llaves del if

  // Aquí también lanzara un SyntaxError por la redeclaración
  // var MY_FAV = 20; // Sea 'var', 'let' o 'const'
}

// Nuestra constante aun sigue siendo la misma, ya que jamás se modifica dentro del bloque del if
console.log("Mi variable favorita aun es: " + CONSTANTE);

// Las constantes no se pueden solo declarar, se tienen que inicializar obligatoriamente.
// const OTRA_CONSTANTE; //SyntaxError: Missing initializer in const declaration

/*
   CONST en OBJETOS
*/

const PERRO = {
  nombre: "Firulais",
  edad: 10,
  raza: "Chihuahua"
};

console.log("Mi perro es: ", PERRO);

// Si intentamos agregar una nueva propiedad al objeto existente
PERRO.color = "Blanco";
// Se agrega la nueva propiedad. Esto no es un error, ya que no es reasignado,
// se puede mutar el objeto, pero no cambiarlo totalmente,
console.log("Mi perro es: ", PERRO);

// Si intentamos reasignar, nos marcará un error de intento de reasignación
// const PERRO.estatura = '30cm';
// console.log('Mi perro es: ', PERRO); //SyntaxError: Identifier 'PERRO' has already been declared

// Si intentamos cambiar un valor de una propiedad ya existente
PERRO.nombre = "Billy";
console.log("Mi perro es: ", PERRO);
// La propiedad es cambiada sin errores, ya que los object keys no estan protegidas
// Esto no quiere decir que se puede cambiar el valor de la constante,
// El valor(objeto) nunca cambia, salvo la propiedad.

/*
   CONST en ARREGLOS
*/

// Las mismas propiedades se aplican a los arreglos(arrays)
const ARREGLO = ["A", "B", "C"];
console.log("Mi arreglo es: ", ARREGLO);

// es posible empujar elementos en el array
ARREGLO.push('Z');
console.log('Mi arreglo es:', ARREGLO);

// Sin embargo, asignar un nuevo array a la variable lanza error
// ARREGLO = ['w']; 
// console.log('Mi arreglo es: ', ARREGLO); //invalid assignment to const `ARREGLO'


/**
 * RESUMEN:
 * 
 * Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara.
 * Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara,
 * lo que tiene sentido, dado que NO se puede cambiar posteriormente.
 *
 * La declaración de una constante "crea una referencia de sólo lectura".
 * No significa que el valor que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado,
 * por lo tanto, en el caso de que la asignación a la constante sea un objeto, el objeto si que puede ser alterado.
 *
 * Una constante no puede compartir su nombre con una función o variable en el mismo ámbito.
 *
 * Todas las consideraciones acerca de la "zona muerta temporal/zona temporal de la muerte"
 * se aplican tanto a 'let' y 'const'.
 */
