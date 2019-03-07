/** 
 * SCOPE: 
 * El escope(ámbito o alcance) de una variable es el contexto en el cual la variable existe, 
 * este nos indica en qué partes del programa podemos acceder a esa variable o si tenemos acceso a la misma. 
 * En JavaScript existen dos tipos de scope: LOCAL y GLOBAL.
*/

// Ejemplo 1 
for (var i = 0; i < 10; i++) {
   console.log(i);
}


console.log('Valor de i fuera del for -> ' + i); //Imprime: Valor de i fuera del for -> 10
console.log(window.i); //Imprime 10

/*
   Cuando nosotros usabamos una vairable 'var', esta dependia mucho de donde y con que cuidado la declarabamos,
   en este caso var puede ser invocada fuera del for, porque al momento de declararla, esta se registró en el
   objeto global 'window'.
   Nosotros pensariamos que el ultimo valor que tomo i fue 9, pero no es asi, ya que el ultimo valor
   que toma en el ciclo fue el ultimo incremento = 10.
   Al invocarla fuera con el console log, pensariamos que no se puede acceder al valor de i, sin enbargo
   en la consola nos regresa algo, esto debido a que la variable declarada como var i = 0, se alojo en el objeto window.
   Esto lo corroboramos al invocarla -i- dentro de window como un paramtro mas.
*/

// Ejemplo 2

if (false) {
   var mensaje = 'Soy verdadero';
}

console.log(mensaje); // Imprime: undefined

if (true) {
   var mensaje = 'Soy verdadero';
}

console.log(mensaje); // Imprime: Soy verdadero


/*
   NOTA: En un inicio con Javascript se penso en compartir los valores de la variable y que asi pudieran ser alojadas
   para su posterior uso o intercambio de informacion, pero el 'estado actual de javascript' es otro. 
   Tener una variable tipo var, contamina a nuestro ambito global, y no queremos eso.
*/

