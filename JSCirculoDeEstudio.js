// 1. Hacer una función que remueva aquellos objetos que no tengan propiedades (objetos vacios)
//     1. Se pasará un arreglo de objetos.
//     2. Se devolverá un arreglo nuevo (sin mutar el arreglo original)
//     3. Se devolverá una propiedad con la cantidad de objetos vacios
//     3.1 Input [{},{},{name:"Bryan"}]
//     3.2 Output: {emptyObject:2, nonEmptyObject:[{name:"Bryan"}]}
//     4. Ejemplo: { emptyObjects: 4, nonEmptyObjects: [{name: "Bryan"}, {address: { street: "example" }}, {age: 5}] } 
// Tiempo 15 min

// //Arreglo de objetos:
// const cantantes = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     {},
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     {},
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     {},
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//     {}
// ];
// console.log(Object.keys(cantantes));
// function addProperty(cantantes){
//     var myNewArray = Object.assign({},cantantes,{
//         // Object.keys(cantantes);
//     })
//     return myNewArray
// }




// 2. Hacer una función que devuelva un objeto a partir del siguiente arreglo:
// [
//    ["name", "Bryan"],
//    ["lastName", "Montes"],
//    ["isActive", true],
//    ["age", 1],
//    ["calificaciones", [9, 10, 10, 7]]
// ]
// devolverá:
// {
//    name: "Bryan",
//    lastName: "Montes",
//    isActive: true
//    ....
// }
// Tiempo 15 min


// 3. Hacer una función que retorne valores únicos.
//     1. Input: [1,2,3,3,3,4,5,5,5,6,7,7,7]
//     2. Output: [1,2,3,4,5,6,7]
// Tiempo 15 min



var arreglo1 = [1,2,3,3,3,4,5,5,5,6,7,7,7];

var nuevoArray = arreglo1.filter(function(elemento,i,rep){
        return i == rep.indexOf(elemento);
    });
    
console.log(nuevoArray);


// 4. Hacer una función que retorne palabras random a partir del numero de caracteres que se le pase. Es decir:
//    1. Input: "abcdefghijklmnopqrstuvwxyz".split("") y el numero 3
//    2. Output: ["afd", "oze", "aaa"] // 3 elementos, 3 letras random
// Tiempo 15 min


// 5. Hacer una función que reciba un arreglo de instancias de una clase y retorne un arreglo de objetos con la edad y el nombre de una persona.
// Tiempo 15 min

