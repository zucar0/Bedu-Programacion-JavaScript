/**
 * Ejercicio 2
 *  1.- Vamos a usar todos los flujos de datos utilizando diferentes variables
 *      y diferentes variables y diferentes tipos de dato.
 *  2.- Usar 3 else if utilizando diferentes condicionantes (<,>,==,===,&&, || )
 * 
 */

 /**
  * < menor que
  * > mayor que
  * >= mayor o igual que
  * <= menor o igual que
  * == igual que?
  * ! negacion
  * != diferente que
  * === igual que pero comparando tipo de dato
  * && and
  * || or
  */

  //1
  var nombre = "Antonio"  
  var segundoNombre ="Josimar"
  if(nombre == "Josimar"){
      console.log("El nombre es Josimar")
  }else if(nombre!="Toño"){
    console.log("El nombre es distinto de Toño")
  }else if(nombre == "Antonio " || nombre == " Antonio"){
    console.log("A ver qué sale")
  }else if(nombre == "Antonio" && segundoNombre =="Josimar"){
    console.log("Entra aquí")
  }else{
      console.log("Nada se cumple")
  }