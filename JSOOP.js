// const myObjectOOP ={
// 	name: "Antonio",
// 	lastName: "Enriquez",
// 	isActive: true,
// 	age:34,
// 	calificaciones: [9,10,10,7],
// 	promedio: function(){
// 		var myPromedio = 0;
// 		this.calificaciones.forEach((myValue)=>{
// 			myPromedio += myValue;
// 		});
// 		return myPromedio / this.calificaciones.length;
// 	},
// };



// //Ejercicio 1
// class Person {
// 	constructor(){
// 		this.anio = 1987
// 		this.name = 'Alejandro',
// 		this.lastName = 'amador'
// 	}
// 	calcularEdad(){
// 		let hoy = new Date();
// 		let anio = hoy.getFullYear();
// 		return anio-`${this.anio}` //Año menos este año = edad
// 	}

// 	get fullname() {
// 		return `${this.name} ${this.lastName}`
// 	}

// 	set fullname(fullvalue){
// 		const arreglo = fullvalue.split(' ');
// 		this.name = arreglo[0];
// 		this.lastName = arreglo[1];
// 	}

// }

// const calculo = new Person()
// console.log(calculo)
// // console.log(calculo.calcularEdad())
// calculo.name ="Antonio";
// console.log(calculo)

// calculo.fullname = 'Juan Candia';
// console.log("Nombre completo: ", calculo.fullname)
// //Tarea
// //Este método muestra solo los valores, sin el nombre de las propiedades.
// // console.log(Object.values(myObjectOOP));
// //En su clase Person, crear un metodo que reciba valores y los agregue 
// //dinamicamenta al contexto "this"

// //Este método muestra los valores y el nombre de las propiedades del objeto. 
// console.log("Las propiedades de la clase Person son: ",calculo);

//Solución de Bryan
/**
 * Tarea
 * Ejercicio 2:
 * 1.- En su clase Person, crear un metodo que reciba valores y los agregue dinamicamenta al contexto "this"
 * Ejemplo:
 * Bryan.addNewProperty("calificaciones", [8, 9, 8, 7, 10])
 * Bryan.addNewProperty("isAlive", true)
 * Cuando yo haga un console.log de "this" muestre todas las propiedades agregadas.
 */
class Person {
	// Sirve para inicializar los valores que estarán contenidos en la clase
	constructor(initialObj) {
	  // initialObj ===> {  }
	  // super();
	  this.name = initialObj.name;
	  this.lastName = initialObj.lastName;
	  this.isActive = initialObj.isActive;
	  this.yearOfBirth = initialObj.yearOfBirth;
	  this.counter = 0;
	}
	greeting() {
	  this.counter++;
	  console.log(`Hola me llamo ${this.name}`);
	  return this.name;
	}
	contador() {
	  console.log(`${this.name} a saludado ${this.counter} veces`);
	}
	// Set debe de asignar cualquier valor o propiedad al contexto this. Set no debe retornar ningún valor
	set setNewProperty({ newProp, value }) {
	  // Destructuring, Destructure
	  this[newProp] = value;
	}
	// Los getters retornan información. No se debe de declarar o asignar nada dentro del getter.
	get getAll() {
	  return this;
	}
  }
  // Bryan es una instancia de Person
  const Bryan = new Person(myObject);
  Bryan.setNewProperty = { newProp: "another", value: 1993 };
  Bryan.setNewProperty = { newProp: "hobbies", value: ["Read", "Cycling"] };
  Bryan.setNewProperty = { newProp: "address", value: { street: "Hola Mundo Js" } };
  console.log("Bryan.getAll ===>", Bryan.getAll);