/**
 * 1. Utilizar 2 operadores aritméticos y evaluarlos en una condición.
 * 2. Utilizar la negación para hacer valores "falseys" a verdaderos.  
 * 3. Utilizar comparación para evaluar un string. 
 * 
 */
//  let a = 10
//  let b = 50
//  let c = 'antoine'
//  let d = 'griezman'
//  let e 
//  //1
//  if(a >= b ){
//     console.log("A es mayor o igual que B")
//  }else{
//      console.log("B es mayor que A") }
//  //2
// if(!e){
//     console.log("E es verdadero")
// }else{
//     console.log("Es es falso")}
//  //3
//  if(d == c){
//      console.log("D es igual que C")
//  }
// else{
//     console.log("D es distinto que C")}

//Condicionales
var sumaStr = "1" + "1"
var sumaNum = 10+1

// if(sumaStr ===  sumaNum){
//     console.log("Las sumas son iguales")
// }else{
//     console.log("Es falso")
// }


//Suma de number más booleano
// var sumaBool = 1 + true //true vale 1
// var restaBool = 1 + false //false vale 0

// console.log("sumaBoool: " + sumaBool)
// console.log("restaBool: " + restaBool)

//Estrictamente diferente. SumaStr es "11" y sumanNum es 11
//¿11 es diferente de 11? FALSE
//¿String es diferente de Numer? TRUE

// if(sumaStr !== sumaNum){
//     console.log("Las sumas son iguales")
// }else{
//     console.log("Es falso")
// }

var myArray2 =[1,2,3,4,5,6,7,8,9,10];
// console.log(myArray2.length)
for(var i=0; i < myArray2.length; i++){
    console.log(myArray2[i])
}