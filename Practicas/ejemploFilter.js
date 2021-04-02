console.log([{}, {}, {name: "Bryan"}].filter((obj) => Object.keys(obj).length));

// 1.- {}  //Indíce 0
// Object.keys({})  =  []  //Esto es Object.keys de un objeto vacío, y retorna un arreglo vacío. 
// [].length = 0   //Si se le pone a un arreglo vacío .length podemos saber la cantidad de elemento que hay en un arreglo
// 0 -> falsey  //Al ser false, el arreglo que devuelve sigue vacío.
// .filter => ¿Qué hace filter? Evaluar una condición. Si es true, entonces devuelve el valor que tenía en ese momento 
// Si evalua el valor como false, entonces omite el valor que tenía en ese momento 
// return filter []

// 2.- {}  //El segundo elemento está vacío. Tiene el índice 1.
// Object.keys({})  =  []
// [].length = 0
// 0 -> falsey
// .filter => evaluar una condición. Si es true, entonces devuelve el valor que tenía en ese momento
// Si es false, entonces omite el valor que tenía en ese momento
// return filter []

// 3.- {name: "Bryan"}  //Tercer elemento; tiene el índice 2 de segundo posición, pero es la tercera iteración. 
// Object.keys({name: "Bryan"}) = ["name"]  //Cuando se hace el Object.keys del objeto nos arroja un array de strings con la propiedad name. (Las propiedades son strings)
// ["name"].length = 1  //Se retorna uno porque existe un elementos.
// 1 -> truthy   
// filter evalua si es true, entonces devuelve el valor que tenía en ese momento  porque es true. 
// [{name: "Bryan"}] //Devuelve el valor que se tenía en ese momento con todo lo que tenía el objeto. 