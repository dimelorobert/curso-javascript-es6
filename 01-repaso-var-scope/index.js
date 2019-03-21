/**
 * SCOPE:
 * El escope(ámbito o alcance) de una variable es el contexto en el cual la variable existe,
 * este nos indica en qué partes del programa podemos acceder a esa variable o si tenemos acceso a la misma.
 * En JavaScript existen dos tipos de scope: LOCAL y GLOBAL.
 */

/** 
 * Ejemplo 1 - Var en el contexto global
 */

console.warn('********** EJEMPLO 1 **********');

for (var i = 0; i < 10; i++) {
   console.log(i);
}

console.log('Valor de i fuera del for -> ' + i); //Imprime: Valor de i fuera del for -> 10
console.log(window.i); //Imprime 10

/*
   Cuando nosotros usabamos una vairable 'var', esta dependia mucho de donde y con que cuidado la declarabamos,
   en este caso 'var' puede ser invocada fuera del for, porque al momento de declararla, esta se registró en el
   objeto global 'window'.
   Nosotros pensariamos que el ultimo valor que tomó i fue 9, pero no es así, ya que el ultimo valor
   que toma en el ciclo fue el ultimo incremento = 10.
   Al invocarla fuera con el console log, pensariamos que no se puede acceder al valor de i, sin enbargo
   en la consola nos regresa algo, esto debido a que la variable declarada como var i = 0, se alojo en el objeto window.
   Esto lo corroboramos al invocarla -i- dentro de window como un paramtro mas.

   NOTA:
   'Var' contamina el ambiente global, la unica forma de evitar esto es envolverlo en una función.
*/

/** 
 * Ejemplo 2 - Var en 'Zona temporal de la muerte'
 */
console.warn('********** EJEMPLO 2 **********');

if (false) {
   var mensaje = 'Soy falso';
}

console.log(mensaje); // Imprime: undefined

if (true) {
   var mensaje = 'Soy verdadero';
}

console.log(mensaje); // Imprime: Soy verdadero

/*
   Un problema muy común es que al estar viviendo en el contexto del global object,
   si no se tiene cuidado, 'var' puede tener valores no esperados como 'undefinded', que no significa
   que no exista, sino que aun no tiene un valor asignado.
   Solo en el momento que entra a la condicion se asigna un valor.
   Igual se observa que con 'var', se puede hacer una redeclaracion sin problema.
*/


/**
 * EJEMPLO 3: Var y su referencia en las funciones
 */
console.warn('********** EJEMPLO 3 **********');

var arregloFunciones = [];

for (var i = 0; i < 10; i++) {
   // console.log("Antes: " + i);

   // método 1
   arregloFunciones.push(
      function () {
         console.info('Durante: ' + i);
      }
      // Aqui imprime 10 (10 veces), porque i se pasa por referencia
   );

   // método 2
   // arregloFunciones.push(
   //    (function (valor) {
   //       return function () {
   //          console.info('Durante -> ' + valor);
   //       };
   //    })(i)
   // );

   console.log("Despues: " + i);
}

// 'i' mantiene la relacion con todas las funciones
// Si modificamos i:
// i = 100;
// Imprime: Durante: 100 (10 veces)

console.log('Valor de i fuera del for -> ' + i);

arregloFunciones.forEach(function (valor, index) {
   // console.log('Index ' + index);
   valor();
});

/*
   En el anterior ejemplo, se requiere construir un arreglo que contenga numeros incrementales del 0-9,
   cada registro con una función que regrese el número.
   El primer método seria el mas común, pero vemos que nos imprime 10 veces 10.
   Esto se debe a que i esta declarada con un contexto global en el global object,
   por lo que el ultimo valor que tome 'i', sera el valor que tome.

   Para limitar el scope de 'var', se recurre a contenerlo dentro de una función, el método 2,
   construye el arreglo en base a esa condicion. Es por eso que se muestran los numeros como se esperaban.

   Si nosotros asignamos un nuevo valor a 'i' = 100 fuera del ciclo, nos mostrara 10 veces 100.
   Esto porque toda variable 'var' declarada fuera de una función, se aloja en el global object, en este caso window,
   que tiene un alcance global en nuestro entorno,
*/

/**
 * EJEMPLO 4: Var y su scope dentro de una función
 */
console.warn('********** EJEMPLO 4 **********');

var nombre = 'Benito Bodoque';

function obtenerNombre() {
   var nombre = 'Fredo Godofredo';
   console.log('El nombre es: ' + nombre);
}

obtenerNombre(); //Imprime: El nombre es: Fredo Godofredo
console.log(nombre); //Imprime: Benito Bodoque
/*
   Para contorlar el alcance de 'var' y contaminar el global object, 
   usamos una función para envolverla.
*/


/*
   En resumen:
   - 'var' al ser declarada se aloja en el global object, por consiguiente tiene un alcance global.
   - 'var' puede ser limitada en su alcance(scope), envolviendola en una función.
   - 'var' puede ser definida/inicializada y actualizada.
   - 'var' puede ser reasignada despues de una inicializacion.
   - 'var' puede ser hoisteada(levantada) en la parte superior de su scope(alcance).
      Por lo que puede ser llamada antes de ser inicializada, no marca error porque es afectada pro el hoisting.
 */

/*_________________________________________________________________________________________________*/

/**
 * TODO: Pasar este parrafo en la seccion de 'let'
 * Con 'let'  crea una nueva instancia de 'i', en cada iteración, 
 * por eso no se comparte esa referencia como lo hace 'var'.
 * Por consiguiente nos ahorramos varias lineas de código
 * y decrementamos la complejidad a una sola linea.
 */

/*
   NOTA: En un inicio con Javascript se penso en compartir los valores de la variable y que asi pudieran ser alojadas
   para su posterior uso o intercambio de información, pero el 'estado actual de javascript' es otro. 
   Tener una variable tipo var, contamina a nuestro ambito global, y no queremos eso.
*/