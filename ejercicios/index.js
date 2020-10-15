// (function () {
//    console.info('Hola');
// })();

const PERSONA = {
  nombre: 'Ramona',
  edad: 20,
}

PERSONA.apellido = 'Ramones'
PERSONA.nombre = 'Ramones'
// PERSONA = 1;
// Error: Porque se cambia la referencia, de ser un objeto se quiere pasar a un número, y al ser 'const' no se puede reasignar el valor de la constante

// PERSONA = {} // Aun que se iguale aun obj vacio

console.log(PERSONA)

// hola();

// function hola() {
//    console.log(1);
// }

// console.log(paquito); // undefinded
// var paquito = 'paquito';
// console.log(paquito);

console.log(1)
console.log(2)

setTimeout(function () {
  console.log(3)
}, 0)

console.log(4)

// for (var i = 0; i < 4; i++) {
//    setTimeout(function () {
//       console.log(i);
//    }, 0);
// }

// for (let i = 0; i < 4; i++) {
//    setTimeout(function () {
//       console.log(i);
//    }, 0);
// }

const anonimo = {
  nombre: 'Ramona',
  apellido: 'Ramones',
  edad: 17,
}

console.log('El nombre completo es: ' + anonimo.nombre + anonimo.apellido)
console.log(`El nombre completo es: ' ${anonimo.nombre} ${anonimo.apellido}`)

console.log(
  `El nombre completo es: ' ${anonimo.nombre} ${anonimo.apellido} y es ${
    anonimo.edad > 18 ? 'mayor' : 'menor'
  } de edad`
)
