/** Ejercicio  7 Colores
 * 1.- Contesta la siguiente pregunta en un comentario: ¿Cuándo es bueno usar un switch y cuando es mejor usar un else if?
 * Me parece que el switch es viable cuando se tiene el valor predefinido; el else if nos va a ayudar con la evaluación de las condiciones.
 * Y por performance en el código  utilizaría el switch, pero depende de cada caso específico. 
 * 2.- Hacer un Switch statement que evalue el tipo de color. El switchmostrará en consola la cantidad de caracteres que tiene el color 
 * usando la propiedad length y se sumará con el número case que le corresponde. */

 var color = "BLACK"
 switch(color){
     //Case NUM 1
    case "YELLOW": console.log(color.length + 1)
    break;
     //Case NUM 2
     case "BLUE": console.log(color.length + 2)
    break;
    case "RED": console.log(color.length + 3)
    break;
    case "BLACK": console.log(color.length + 4)
    break;
    case "GRAY": console.log(color.length + 5)
    break; 
    case "WHITE": console.log(color.length + 6)
    break;
    case "PURPLE": console.log(color.length + 7)
    break;
    default: console.log("Distintos")
        break;
 }