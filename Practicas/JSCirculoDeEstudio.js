// 1. Hacer una función que remueva aquellos objetos que no tengan propiedades (objetos vacios)
//     1. Se pasará un arreglo de objetos.
//     2. Se devolverá un arreglo nuevo (sin mutar el arreglo original)
//     3. Se devolverá una propiedad con la cantidad de objetos vacios
//     3.1- Input [{}, {}, {name: "Bryan"}]
//     3.2- Output: { emptyObjects: 2, nonEmptyObjects: [{name: "Bryan"}] }
//     4. Ejemplo de salida: { emptyObjects: 4, nonEmptyObjects: [{name: "Bryan"}, {address: { street: "example" }}, {age: 5}] }
// Tiempo 15 min




/**
 * A function that will return a filtered array of objects
 * Input: [{}, {}, {name: "Bryan"}]
 * Output: { emptyObjects: 2, nonEmptyObjects: [{name: "Bryan"}] }
 * @param {Array[Objects]} arrObjs
 */

 const removeEmptyObjs = (arrObjs) => {
    const filteredObjects = [{}, {}, {name: "Bryan"}].filter((obj) => Object.keys(obj).length)
    return {
      nonEmptyObjects: filteredObjects,
      emptyObjects: arrObjs.length - filteredObjects.length
    }
  }
  
  const exampleInput1 = [{}, {name: "Bryan"}, {}, {age: 76}]
  const resultRemoveEmptyObjs = removeEmptyObjs(exampleInput1)
  // console.log("resultRemoveEmptyObjs ==>", resultRemoveEmptyObjs)
  
  // 1.- {}
  // Object.keys({})  =  []
  // [].length = 0
  // 0 -> falsey
  // .filter => evaluar una condición. Si es true, entonces devuelve el valor que tenía en ese momento
  // Si es false, entonces omite el valor que tenía en ese momento
  // return filter []
  
  // 2.- {} 
  // Object.keys({})  =  []
  // [].length = 0
  // 0 -> falsey
  // .filter => evaluar una condición. Si es true, entonces devuelve el valor que tenía en ese momento
  // Si es false, entonces omite el valor que tenía en ese momento
  // return filter []
  
  // 3.- {name: "Bryan"}
  // Object.keys({name: "Bryan"}) = ["name"]
  // ["name"].length = 1
  // 1 -> truthy
  // filter evalua si es true, entonces devuelve el valor que tenía en ese momento
  // [{name: "Bryan"}]
  
  
  
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
  
  
  /**
   * A function that will return an object based on an array with props and values
   * Input:
   * [
        ["name", "Bryan"],
        ["lastName", "Montes"],
        ["isActive", true],
        ["age", 1],
        ["calificaciones", [9, 10, 10, 7]]
      ]
      Output:
      {
        name: "Bryan",
        lastName: "Montes",
        isActive: true
        ....
      }
   * @param {Array[Array]} arrayProps An array that contains arrays
   */
  const createObjectFromArray = (arrayProps) => {
    return arrayProps.reduce((accumulator, current) => {
      accumulator[current[0]] = current[1]
      return accumulator
    }, {}) // String, Array, Object, Number || primer elemento del arreglo
  }
  
  // Reduce => Reduce el arreglo a un solo valor. Aglomera todo.
  // [ ["name", "Bryan"], ["lastName", "Montes"] ]
  // .reduce(    (accumulador, valorActual) => {}   ,    {})
  // [ ["name", "Bryan"], ["lastName", "Montes"], ["name", "Oscar"] ]
  
  // 1.- accumulator ===> {}  valorActual ===> ["name", "Bryan"]
  // {}["name"] = "Bryan"
  // return { name: "Bryan" }
  
  // 2.- accumulator ===> { name: "Bryan" }  valorActual ===> ["lastName", "Montes"]
  // { name: "Bryan" }["lastName"] = "Montes"
  // return { name: "Bryan", lastName: "Montes" }
  
  // 3.- accumulator ===> { name: "Bryan", lastName: "Montes" }  valorActual ===> ["name", "Oscar"]
  // { name: "Bryan", lastName: "Montes" }["name"] = "Oscar"
  
  // a) Runtime error
  // b) Syntax error
  // c) { name: "Oscar", lastName: "Montes" }
  
  const myObj = {
    name: "Bryan"
  }
  
  myObj.name = "Susana"
  myObj.age = 20
  
  
  
  const exampleInput2 = [
    ["name", "Bryan"],
    ["lastName", "Montes"],
    ["isActive", true],
    ["age", 1],
    ["calificaciones", [9, 10, 10, 7]]
  ]
  
  const resultObjectFromArray = createObjectFromArray(exampleInput2)
  // console.log("resultObjectFromArray ===>", resultObjectFromArray)
  
  
  
  // 3. Hacer una función que retorne valores únicos.
  //     1. Input: [1,2,3,3,3,4,5,5,5,6,7,7,7]
  //     2. Output: [1,2,3,4,5,6,7]
  // Tiempo 15 min
  
  /**
   * Unique number method. 
   * This will return any char that is not repeated. Works with numbers and characters. Even words
   * Input: [1,2,3,3,3,4,5,5,5,6,7,7,7]
   * Output: [1,2,3,4,5,6,7]
   * @param {Array[String|Number]} arrayOfNumbers an array that will contain non object type values such as number or strings
   */
  const uniqueNumbers = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((accumulator, current) => {
      return accumulator.indexOf(current) === -1 ? [...accumulator, current] : accumulator
    }, [])
  }
  
  const exampleInput3 = [1,2,3,3,3,4,5,5,5,6,7,7,7,'a', 'a', 'b']
  const resultUniqueNumbers = uniqueNumbers(exampleInput3)
  // console.log("resultUniqueNumbers ===>", resultUniqueNumbers)
  
  // 4. Hacer una función que retorne palabras random a partir del numero de caracteres que se le pase. Es decir:
  //    1. Input: "abcdefghijklmnopqrstuvwxyz".split("") y el numero 3
  //    2. Output: ["afd", "oze", "aaa"] // 3 elementos, 3 letras random
  // Tiempo 15 min
  
  const randomWords = (lettersArray, numberLetters) => {
    let words = []
    for (let i = 0; i < numberLetters; i++) {
      let word = ""
      for (let x = 0; x < numberLetters; x++) {
        const randomArrayPosition = Math.floor(Math.random() * Math.floor(lettersArray.length))
        word += lettersArray[randomArrayPosition]
      }
      words.push(word)
    }
  
    return words
  }
  
  const abcdario = "abcdefghijklmnopqrstuvwxyz".split("")
  const alpha = "aeiou".split("")
  const resultRandomWords = randomWords(abcdario, 5)
  const resultRandomWords2 = randomWords(alpha, 3)
  console.log("resultRandomWords ===>", resultRandomWords, resultRandomWords2)
  
  
  
  
  // 5. Hacer una función que reciba un arreglo de instancias de una clase y retorne un arreglo de objetos con la edad y el nombre de una persona.
  // Tiempo 15 min
  
  
  
  // 6. Hacer una función que actualiza el titulo cuando se escribe en un input
  // (el nombre que se ve en un tab)
  
  // 7. Agregar un atributo a la tabla que hicimos la clase pasada. 
  // El atributo debe ser cualquiera que modifique el estilo de la tabla