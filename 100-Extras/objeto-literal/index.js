/** 
 * Declarando un objeto literal.
 * 
 * NOTA: Un objeto literal es aquel que declaramos de forma "literal", es decir que nosotros definimos sus valores
 * sin obtenerlos de algun recurso o API.
*/




const miObjeto = {
   propiedad1: 'Valor propiedad 1',
   propiedad2: 'Otra cosa',
   propiedad3: true,
   propiedad4: 23,

   metodo1: function () { 
      // console.log('THIS LLAMADO DESDE METODO DENTRO DEL OBJETO LITERAL', this);
      console.log(`Ejecutaste el metodo 1`);
   },

   metodo2: funcionMetodo2
}
 

function funcionMetodo2() { 
   // Se puede usar this para acceder a mis propiedades o metodos
   this.propiedad2 = "Esto lo he modificado desde el metodo 2";
}


//Veamos el valor de esas propiedades
console.log(miObjeto.propiedad1);
console.log(miObjeto.propiedad2);

// Ejecutamos algun metodo
miObjeto.metodo1();
miObjeto.metodo2();

// Creamos nueva proiedad del objeto 
miObjeto.nuevaPropiedad5 = 'Soy la nueva propiedad5 creada Posteriormente';

// Creamos un nuevo metodo

miObjeto.nuevoMetodo3 = function () {
   console.log("Soy en nuevo metodo3 creado Posteriormente")
}


// Veamos el contenido de todo el objeto
console.info(miObjeto);