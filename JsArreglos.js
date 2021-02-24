//Sesión 4: Arreglos en JavaScript

//Método join()
// const miArregloJS = [1,2,3,4,5,6,7,8,9,10]
// console.log(miArregloJS.join(" = "))

//Typeof
// const miArregloJavaScript = [1,2,3,4,5]
// var miVariableDelArreglo = miArregloJavaScript.join("=")
// console.log(typeof miVariableDelArreglo)

//String a Arreglo
// const miStringAArreglo = "1-2-3-4-5-6-7-8-9"
// console.log(miStringAArreglo.split("-"))

//Método MAP
// const miStringAArreglo = "1-2-3-4-5-6-7-8-9"
// const miArregloConvetido = miStringAArreglo.split("-")
// var numerosConvertidos = miArregloConvetido.map((miNumeroDesdeString)=>{
//     return Number(miNumeroDesdeString)
// })
// console.log("Número convertidos ===> ", numerosConvertidos)

/**
 * Ejercicio 1
 * Iterar sobre [1,2,3,4,5] usando for y map.
 * Resultado sea igual a [1, 4, 9, 16, 25]
 */

 //Respuesta con for
//  const miStringAArregloE1 = "1-2-3-4-5"
//  const miArregloConvetidoE1 = miStringAArregloE1.split("-")
//  const arregloEjercicio1 =[]
//  for(let i=0; i<miArregloConvetidoE1.length;i++){
//     //  arregloEjercicio1[i] = miArregloConvetidoE1[i] * miArregloConvetidoE1[i]
//     arregloEjercicio1.push(miArregloConvetidoE1[i]*miArregloConvetidoE1[i])
//  }
//  console.log("Valores:  ",miArregloConvetidoE1)
//  console.log("Resultado: ", arregloEjercicio1)

//  console.log("*******************")

//Respuesta con Map
// const miStringAArregloE1Map = "1-2-3-4-5"
// const miArregloConvetidoE1Map = miStringAArregloE1Map.split("-")
// var ejercicio1conMap = miArregloConvetidoE1Map.map((miValor, i, arrayCompleto)=>{
//     console.log(miValor, i, arrayCompleto)
//     return miValor * miValor
// })
// console.log("Ejercicio con Map: ", ejercicio1conMap)

//For each no devuleve un arreglo; solo itera sobre un arreglo
// const miStringAArregloForEach = "1-2-3-4-5"
// const miArregloConvetidoForEach = miStringAArregloForEach.split("-")
// var miResultadoFiltrado=[]
// miArregloConvetidoForEach.forEach((miValorForEach)=>{
//     if(miValorForEach %2 ===0){
//         miResultadoFiltrado.push(miValorForEach)
//     }
// })
// console.log("Mis resultados del filtrado: ", miResultadoFiltrado)

//Filter sí devuelve un arreglo, siempre devolverá un arreglo igual o menor al original
// const miStringAArregloFilter = "1*2*3*4*5*6*7*8*9*10"
// const miArregloConvertidoFilter = miStringAArregloFilter.split("*")
// var resultadoFil,ter = miArregloConvertidoFilter.filter((mivalorFilter) =>{
//     return mivalorFilter%2===0
// })
// console.log("Resultados mi filter: ", resultadoFilter)



//Ejercicio 2
//Crear una función que recibe un arreglo de números.
//La función debe de retornar el promedio de todos los números del arreglo.
//Utilizar el método "foreach"
// miArregloforEach =[1,2,3,4,5,6]
// function recibeArreglo(arreglo){
//     let suma =0;
//     let auxiliar=0;
//     let promedio;
//     arreglo.forEach(valor => {
//         suma = valor + suma;
//         // console.log(valor);
//         auxiliar++
//     })
//     // console.log(auxiliar)
//     console.log("La suma es: ", suma);
//     promedio = suma/auxiliar; 
//     return promedio;
// };

// var calcular = recibeArreglo(miArregloforEach);
// console.log("El promedio es: ", calcular);

//Ejemplo de sumar, arreglos de forma independiente
// const alumnos = [[8,9,7], [6,5,6], [9,9,10], [5,4,4], [10,10,9,8,7,8,9]];

// const promedios = alumnos.map((alumno) =>{
//     let suma = alumno.reduce((a,b) => a+b);
//     return suma/alumno.length; 
// })
// console.log(promedios);

//Crear un array a partir de un objeto
//1) Se declara el objetos
const myObject ={
    name: "antonio",
    lastName: "enriquez",
    isActive: true, 
    age: 33,
    calificaciones: [9, 10, 10, 7],
    promedio: function(){
        var myProm = 0
        this.calificaciones.forEach((myValue) =>{
            myProm += myValue
        })
        return myProm / this.calificaciones.length
    },

}
//2) Se declara la función

const convertObjectIntoArray = (object) =>{
    //objectKeys ===> ['name', 'lastName','age','calificaciones','promedio']
    const objectKeys = Object.keys(object);
    // console.log("objectKeys es ===>", objectKeys)
    let converted = objectKeys.map((llave) =>{
        // console.log("llave es ===>", llave, "y es de tipo ===>", typeof llave)
        return[llave, object[llave]];
    });
    return converted;
};
//3) Se imprime en consola pasando myObject como parámetro
// console.log(
//     "convertObjectIntoArray(myObject) ===>",
//     convertObjectIntoArray(myObject)
//     )

//TAREA: Convertir el arreglo de vuelta a un objeto 
const arregloEj5 = convertObjectIntoArray(myObject);


// const arrayToObject = arregloEj5.reduce(function(resultado, item, index, array){
//      resultado[index] = item;
//      return resultado
// }, {});
// console.log(arrayToObject);

 
// const arregloEj5 = convertObjectIntoArray(myObject);

// function reducer(acc,cur){
//     return {acc, [cur.id]:cur};
// }
// let newObj = arregloEj5.reduce(reducer,{})
// console.log(newObj)


// const newObj = arregloEj5.reduce((prev, current)=>{
//     prev[current.id] =current;
//     return prev;
// },{});

// console.log(newObj)

const indexed = arregloEj5.reduce((acc, elemento) => ({
     acc,
     [elemento.name]: elemento
}), {})

console.log(indexed)