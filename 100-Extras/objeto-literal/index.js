/** 
 * Declarando un objeto literal.
 * 
 * NOTA: Un objeto literal es aquel que declaramos de forma "literal", es decir que nosotros definimos sus valores
 * sin obtenerlos de algún recurso o API.
*/

const miObjeto = {
   propiedad1: 'Valor propiedad 1',
   propiedad2: 'Valor propiedad 2',
   propiedad3: true,
   propiedad4: 23,

   metodo1: function () { 
      // console.log('THIS LLAMADO DESDE método DENTRO DEL OBJETO LITERAL', this);
      console.log(`Ejecutaste el método 1`);
   },

   metodo2: funcionMetodo2
}
 

function funcionMetodo2() { 
   // Se puede usar this para acceder a mis propiedades o metodos
   this.propiedad2 = "Esto lo he modificado desde el método 2";
}


//Veamos el valor de esas propiedades
console.log(miObjeto.propiedad1); //Imprime: Valor propiedad 1
console.log(miObjeto.propiedad2); //Imprime: Valor propiedad 2

// Ejecutamos algún método
miObjeto.metodo1(); //Imprime: Ejecutaste el método 1
miObjeto.metodo2(); //Modifica el valor de la propiedad 2

// Creamos nueva proiedad del objeto 
miObjeto.nuevaPropiedad5 = 'Soy la nueva propiedad5 creada Posteriormente';

// Creamos un nuevo método
miObjeto.nuevoMetodo3 = function () {
   console.log("Soy en nuevo metodo3 creado Posteriormente")
}


// Veamos el contenido de todo el objeto
console.info(miObjeto); //Imprime: el objeto y sus propiedades
