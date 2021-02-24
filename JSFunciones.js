//Sesión 3 - Funciones en JavaScript
//¿Qué es una función? Una función es un conjunto de instrucciones que realizan una tarea/proceso o calcular un valor. 
// Su finalidad es que en lugar de repetir el mismo código una y otra vez, podemos crear una función.

// var suma1 = 1+1
// var suma2 = 1+2
// var suma3 = 1+3
//No hay límite de parámetros para un función
/**
 * 
 * @param {number} parametro1 
 * @param {number} parametro2 
 */
// function myFunction (parametro1, parametro2){
//     //Las instrucciones van aquí
//     return parametro1 + parametro2
//     console.log("Esto es después del return")
//     //Todo lo que esté luego de un return no se ejecuta.

//     const otraSuma = parametro2 +parametro1
//     return
// }
//Pasos para ejecutar una función:
// Paso 1: Colocar el nombre de la función
// Paso 2: Colores paréntesis después del nombre de la función
// Paso 3: Colocar los parámetros con los que va a trabajar la función 

// var ElResultadoDeMiFuncionEs = myFunction(1,2)
// var ElSegundoResultadoEs = myFunction(65,66)
// var ElTercerResultadoEs = myFunction(3,3)
// console.log("R1: ", ElResultadoDeMiFuncionEs)
// console.log("R2: ", ElSegundoResultadoEs)
// console.log("R3: ", ElTercerResultadoEs)


//Ejercicio 1
// Crear una función que reciba tres parámetros
// La función debe de retornar su nombre concatenado y un saludo.

// function miNombreConcatenado(nombre, apellido, saludo){
//     var resultadoDeLaFuncion = nombre + ' ' + apellido + '.' + '\n' + saludo +'.'  
//     return resultadoDeLaFuncion
// }

// var llamandoALaFuncion = miNombreConcatenado("Antonio", "Enriquez", "Hola Mundo")
// console.log(llamandoALaFuncion)

//Otra opcion
// function concatenarNombre (name, lastName, greetings){
//     return `${name} ${lastName} ${greetings}`;
// }
// console.log(concatenarNombre("Antonio", "Enriquez", "Jello guorld!"))


// //Segunda función
// var miSegundFuncion = function(param1, param2){
//     param1 + param2;
// }

// var resultado2 = miSegundFuncion(1,5)
// console.log("Segunda: ", resultado2)

//Arrow Functions
// const exponente2 = (param1, param2) => param1 *= param2
// console.log("Exponente 2: ", exponente2(2,2))

//Ejercicio Arrow Functions

// const ejercicio2 = (nombre, apellido, tiempo) => {
//     let saludo=""
//     switch(tiempo){
//         case "morning":
//             saludo="Hola "+nombre+" " + apellido+"." + "\n Buenos días.";
//             break;
//         case "evening":
//             saludo="Hola "+nombre+" "+apellido+"."+ "\n Buenas tardes.";
//             break;
//         case "nigth":
//             saludo="Hola "+nombre+" "+apellido+"."+ "\n Buenas noches.";
//             break;
//         default:
//             saludo="No sé qué hora es "+nombre+" "+apellido;
//     }
//     return saludo;
// }

// console.log(ejercicio2("Antonio", "Enriquez", "nigth"))

//Solución del maestro
// const greeting = (nombre, apellido, horario) => {
//     switch(horario){
//         case "morning":
//             return `Hola ${nombre} ${apellido}, buenos días.`
//         case "evening":
//             return `Hola ${nombre} ${apellido}, buenas tardes.`
//         case "nigth":
//             return `Hola ${nombre} ${apellido}, buenas noches.`
//         default:
//             return `Hola ${nombre} ${apellido}`
//     }
// } 

// console.log(greeting("Bryan", "Montes", "evening"))


//IIFE
// (function() {
// 	console.log("IIFE ejecutada");
// })();

//IIFE con parámetros
// (function(PrimerNombre) {
//     	console.log("IIFE ejecutada: ", PrimerNombre );
//     })("Antonio");
    

//Ejercicio de función anónima
(function(miArreglo, objetivo) {
    let resultado; //Antes de que se declare con las iteraciones esta variable es undefined.
    let iteracion = 0; //Debugging
    //Primer ciclo for
    for(var i=0; i < miArreglo.length; i++){
        //Arreglo: [3,5,-4,8,11,1,-1,6]
        //Posición [0,1,2, 3,4, 5, 6,7]
        for(var x = 0; x<miArreglo.length; x++){
            //Se suman los valores comparados 
            const suma = miArreglo[i] + miArreglo[x]; //Se sumarán los valores de cada iteracion de cada ciclo 
            //Mostraremos cuántas veces tuvo que correr para llegar al resultado
            console.log(iteracion++);
            //Condición: Si la suma es igual al objetivo
            if(suma === objetivo){
                //Vamos a almancenar el resultado en nuestro variable que declaramos al principio de la función
                resultado = [miArreglo[i], miArreglo[x]];
                break; //Para terminar la iteración.
            }
        }
        if(resultado){
            break;
        }
    }
    if(resultado){
        console.log(`Los números que suma ${objetivo} son ==> `, resultado);
    }else{
        console.log(`No hay números con los que se obtenga ${objetivo}`);
    }
})([3,5,-4,8,11,1,-1,6], 17);