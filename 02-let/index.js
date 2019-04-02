/**
 * LET:
 * La instrucción 'let' declara una variable de alcance local con ámbito de bloque(BLOCK SCOPE), 
 * la cual, opcionalmente, puede ser inicializada con algún valor.
 * 
 * let permite declarar variables limitando su alcance(scope) al bloque, declaración, o expresión donde se está usando.
 * Lo anterior diferencia let de la palabra reservada var, la cual define una variable global o local en una función sin importar el ámbito del bloque.
 * 
 * Fuente MDN: https: //developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */

/* 
   Con let, podemos delimitar el alcance de nuestro código, garantizando con ello las buenas practicas,
   teniendo asi un código mas limpio.
*/

if (true) {
   let i = 10;
   console.log('El valor de i es: ' + i); //Imprime: El valor de i es: 10
}

// console.log('El valor de i fuera del if -> ' + i); // ReferenceError: i is not defined

/*
   En el ejemplo anterior, vemos como 'i' es limitada en su alcance y solo existe dentro de la condicional 'if'.
   Si nosotros quisieramos acceder a ella fuera de su ámbito, la consola nos marcaria un error de referencia.
   El ámbito de 'i' esta limitado por las llaves de la condicional.
*/

/**
 * =================================================
 * REGLAS DE ALCANCE
 * =================================================
 */


/*
   Variables declaradas por let tienen por alcance el bloque en el que se han definido,
   así mismo, como en cualquier bloque interno.De esta manera, let trabaja muy parecido a var.
   La más notable diferencia es que el alcance de una variable var es la función contenedora:
*/

function varTest() {
   var x = 31;

   if (true) {
      var x = 71; // ¡misma variable!
      console.log(x); // Imprime: 71
   }
   console.log(x); // Imprime: 71
}

function varLet() {
   let x = 31;

   if (true) {
      let x = 71; // es una ariable diferente
      console.log(x); // Imprime: 71
   }
   console.log(x); // Imprime: 31
}

varTest();
varLet();


/*
   Let siemrpe estará limitado por su ámbito, es por eso que se le denomica BLOCK SCOPE,
   Si nosotros declararamos let dentro de unas llaves(corchetes), seguiria cumpliendose eta regla.
 */

{
   let y = 'Hola Billy';
   console.log(y); // Imprime: Hola Billy
}
// console.log(y); // ReferenceError: y is not defined


/*
   Retomando el ejemplo que hicimos con VAR
*/

var arregloFunciones = [];

for (let i = 0; i < 10; i++) {
   // método 1
   arregloFunciones.push(
      function () {
         console.info('Durante: ' + i);
      }
   );
}

arregloFunciones.forEach(function (valor) {
   valor();
});

/**
   Con 'let'  crea una nueva instancia de 'i', en cada iteración, 
   por eso no se comparte esa referencia como lo hace 'var'.
   Por consiguiente nos ahorramos varias lineas de código al no encapsular a 'i' en un función
   y decrementamos la complejidad a una sola linea.
 */


/**
 * =================================================
 * Redeclaraciones
 * =================================================
 */

// Definida
let ramona;

// Inicializada
ramona = 'dog';
console.log('La variable es: ' + ramona);

// Actualizada
ramona = 4;
console.log('La variable es: ' + ramona);


/*
   La redeclaración de la misma variable bajo un mismo ámbito léxico terminaría en un error de tipo SyntaxError.
   Esto también es extensible si usamos var dentro del ámbito léxico.
   Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con var.
   Solo puede haber una declaracion por bloque de la misma variable.
*/

// Redeclarada
if (true) {
   let nombre = 'Billy';
   // let nombre = 'Boby'; // Terminamos con un SyntaxError. SyntaxError: redeclaration of let nombre
}

// Redeclarada
if (true) {
   let edad = 5;
   // var edad = 5; // Terminamos con un SyntaxError. SyntaxError: redeclaration of let edad
}



/**
 * =================================================
 * Alcance Global?
 * =================================================
 */

/*
   En el nivel superior de un programa y funciones, let, a diferencia de var, 
   no crea una propiedad en el objeto global, por ejemplo:
 */

var a = 'global';
let b = 'global';
console.log(this.a); // "global"
console.log(this.b); // undefined


/**
 * =================================================
 * Hoisting
 * =================================================
 */

console.log(saludo); // Imprime: Undefined
var saludo = 'Hola a todo el mundo!';
 
// console.log(mensaje);
// let mensaje = 'Este es un mensjaje!'; // ReferenceError: can't access lexical declaration `mensaje' before initialization

/*
   A diferencia de 'var', con 'let' no se aplica el concepto de HOISTING,
   ya que let obliga a que se declare la variable antes de ser utilizada.
   Marcaria en consola un error de referencia, por que no se puede acceder
   al valor antes de una inicialización.
 */


/*
   En Resumen:
   - 'let' declara una variable de alcance local, con ámbito de bloque (BLOCK SCOPE).
   - 'let' no crea una una propiedad en el objeto global(GLOBAL OBJECT), por lo que evitamos contamninar el objeto window.
   - 'let' puede ser definida/inicializada y actualizada(el tipo o valor).
   - 'let' NO permite redeclaraciones en el mismo ámbito de bloque
   - 'let' No es afectada por el hoisting. (Antes de usar la variable, tiene que estar declarada e inicializada)
 */
