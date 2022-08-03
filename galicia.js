// let cuentaPesos = 0.00

// function deposito(monto) {
//     cuentaPesos = cuentaPesos+monto;
    
// }

// function extraccion(monto) {
//     cuentaPesos = cuentaPesos-monto;
    
// }

// //Test función

// console.log ("su saldo es", cuentaPesos)

// deposito (1000.00)

// console.log ("Hola popui. Su nuevo saldo es", cuentaPesos
// )

// extraccion (400.00)
// console.log ("Realizo una extracción. Su nuevo saldo es", cuentaPesos
// )


// Anon
// const saludo = function (nombre) {
//     console.log ("Hola", nombre)
// }
// q2
// saludo ("RICARDOVICH")

// Variable

// let foo = function ( ) {console.log ("Ligma")};
// foo();

// Autollamada
// (function (){
//     console.log ("What is ligma?")
// }) ();


// function armarSanguche (ingredientePrincipal) {
//     return function (complementos){
//         console.log("El sanguche es de", (ingredientePrincipal),"con complemento adicional de" ,(complementos))
//    }
// }
// const sangucheCarne = armarSanguche ("Res");
// sangucheCarne ("JyQ")

// const sanguchePollo = armarSanguche ("Pollito");
// sanguchePollo ("tomate")

// function mostrarLista (lista) {
//     if (lista.leinght === 0) {
//         console.log ("lista vacia")
//     } else {
//         console.log (lista)
//     }
// }

// mostrarLista ([1, 2, 3])
// mostrarLista ([]);

// (function (lista) {
//     if (lista.leinght === 0) {console.log ("lista vacia")
// }
//     else {console.log (lista)
//     }

// }
//     )

//     ([4,5,6])

// ;


// function crearMultiplicador (num1)
// {return function (num2)
// {return num1*num2}
// }

// const cuadriplicar =crearMultiplicador (4)

// console.log (cuadriplicar (3))
// console.log (cuadriplicar (10));



// class Persona {
//     constructor (nombre,apellido,direccion){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.direccion = direccion
//     }

//   mostrarNombre () {
//     return `${this.nombre} ${this.apellido}`;
// }
// }
// const persona1 =new Persona ('Carlo', 'Gomez','Av. Siempreviva 123')
// const persona2 =new Persona ('Gomo', 'Carlez','Calle Falsa 123')
// console.log (persona1, persona2);

// console.log (persona1.mostrarNombre (), persona2.mostrarNombre())

// class Contador {
//     static cuentaGlobal = 0

//     constructor(responsable){
//         this.responsable=responsable
//         this.cuentaIndividual= 0
//     }

//     obtenerResponsable(){
//         return this.responsable
//     }

//     obtenerCuentaIndividual(){
//     return this.cuentaIndividual}

//     obtenerCuentaGlobal () {
//     return Contador.cuentaGlobal
//     }

//     contar () {
//         this.cuentaIndividual++
//         Contador.cuentaGlobal++
//     }
// }

// const r1 = new Contador (`res1`)
// const r2 = new Contador (`res2`)

// r1.contar ()
// r1.contar ()
// r1.contar () 
// r1.contar ()
// r1.contar ()
// r1.contar ()
// r1.contar () 
// r1.contar ()

// r2.contar ()
// r2.contar ()
// r2.contar () 

// console.log (`r1 ind: ${r1.obtenerCuentaIndividual ()}`)
// console.log (`r1 glob: ${r1.obtenerCuentaGlobal()}`)

// console.log (`r2 ind: ${r2.obtenerCuentaIndividual ()}`)
// console.log (`r2 glob: ${r2.obtenerCuentaGlobal ()}`)

// class Usuario {
//         constructor (nombre,apellido,mascotas,libros){
//             this.nombre = nombre
//             this.apellido = apellido
//             this.mascotas = mascotas
//             this.libros = libro
//         }
    
//       getFullName () {
//         return `El usuario es ${this.nombre} ${this.apellido} y sus mascotas son ${this.mascotas}`;
//     }
//     }
//     const persona1 =new Usuario('Carlo', 'Gomez', 'Garfield y Chita')
 

//     console.log (persona1.getFullName ())




    

class Usuario{
  constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
      this.mascotas = mascotas;
      this.libros = libros;
   
  }

  getFullName() {
      return `Usuario: ${this.nombre} ${this.apellido}.`;
  }

  addmascota(newMascota){
      this.mascotas.push(newMascota);
  }

  getMascotas(){
      return this.mascotas.length;
  }

  addBook(book, autor){
      this.libros.push( {
          "nombre": book,
          "autor": autor
      });
  }

  getBooks(){
      let getBookNames = []
      this.libros.forEach(item => getBookNames.push(item.nombre));
      return getBookNames;
  }
}

let mascotas = ["Juan el gato", "Ricardo, no sabemos qué es", "Juany"];

let libros = [
  {
  "nombre": "Harry Potter",
  "autor": "Rowling"
  },
  {
  "nombre": "El Señor de los Anillos",
  "autor": "JJR Tolkien"
  },
  {
    "nombre": "IT",
    "autor": "Stevie King"
    }]

let usuario = new Usuario("Nicolas","Caradzoglu", libros, mascotas);
console.log(usuario.getFullName());

usuario.addmascota("Homero el perro");
usuario.addmascota("Daryl el perro 2");



console.log(`Cantidad de Mascotas: ${ usuario.getMascotas() }.`);

usuario.addBook("Alguno de Salinger","Salinger")


console.log(usuario.getBooks());