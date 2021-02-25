// Sesión 6
// Functional programming en Javascript

// Inmutabilidad

// Mutando objetos fn params
// Que es mutabilidad?
// Algo que puede cambiar

// Que es inmutabilidad?
// Algo que no puede cambiar

// Que es una función?
// Una serie de sentencias que ejecutan tareas repetitivas.
var myVariable = 0

/**
 * Función es impura porque:
 * - Está mutando la variable que recibe en el scope global
 * - Está retornando un valor distinto cada vez aún cuando se ingresa el mismo valor
 */
function myFunction () {
  return myVariable += 8
}

// console.log(myFunction())
// console.log(myFunction())
// console.log(myFunction())
// console.log(myFunction())
// console.log(myFunction())

// console.log(myVariable)



// Segundo ejemplo
var mySecondVariable = 0

/**
 * Una función pura no debe mutar o acceder a variables externas.
 * Una función pura siempre debe de retornar el mismo valor cuando se le da el mismo valor de entrada.
 * @param {*} myParam 
 */
function mySecondFunction (myParam) {
  // myParam = myParam + 8
  const result = myParam + 8
  return result
}

console.log(mySecondFunction(mySecondVariable)) // 8
console.log(mySecondVariable) // 0


// Segundo ejemplo para explicar
var cellphone = {
  brand: "Samsung",
  modelo: "S21+",
  year: "2020"
}

function addColor(phone) {
  // cellphone.color = "Blue"
  const myNewPhone = { ...phone, color: "Blue" }
  // var myNewPhone = Object.assign({}, phone, {
  //   color: "Blue"
  // })

  return myNewPhone
}

var resultado = addColor(cellphone)
// console.log("resultado ===>", resultado)
// console.log("cellphone after ===>", cellphone) 


/**
 * Ejercicio 1:
 * 1.- Crear una función que se llame "flatten" que espere 1 parametro
 * 2.- Se debe enviar el siguiente arreglo [[1, 2, 3], [4, 5], [6]]
 * 3.- Deberá retornar [1, 2, 3, 4, 5, 6]
 * Tiempo: 10
 */
//Mi solucion
// function flatten(arreglo) {
//     return arreglos.reduce(function(flat, current) {
//         return flat.concat(current);
//       }, []);
//   }

//   var arreglos = [[1, 2, 3], [4, 5], [6]];

//   var arreglo = flatten(arreglos);
//   console.log("Resultado: ", arreglo)
//   console.log("Valor original: ", arreglos)


//   var arregloRecibido = [0, 1, false, 2, '', 3]
//   function compact(arregloRecibido){

// }

//Solucion de Bryan:
var inputArray = [[1, 2, 3], [4, 5], [6]]
// Función Pura
// Muto mi arreglo original? No
// El valor retornado siempre será el mismo. (Si da el mismo valor de entrada) Si
// Produjo un side effect? No

const flatten = (arrays) => {
  // Reduce: va tomando cada valor del arreglo original. Los junta en 1 solo.
  // Acumulador, y el current val.
  // Reduce va tomando los  valores y regresa un nuevo arreglo
  // Metodos que retornan un nuevo arreglo: map, reduce, filter => Funciones de alto orden.
  return arrays.reduce((flat, current) => {
    // console.log("flat ===>", flat, "con spread ===>", ...flat)
    // return [...flat, ...current]
    return flat.concat(current);
  }, []);
}



// console.log("Result ===>", flatten(inputArray))
// console.log("Result ===>", flatten(inputArray))
// console.log("Result ===>", flatten(inputArray))
// console.log("Result ===>", flatten(inputArray))
// console.log("Result ===>", flatten(inputArray))

// console.log("Original inputArray ===>", inputArray)