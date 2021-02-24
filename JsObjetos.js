//Sesión 4: Objetos en JavaScript

let yoMero={
    nombre: 'Antonio',
    age: 34,
    apellido: 'Juárez',
    calificaciones: [10,9,8,9,7],
    promedio: function(){
        var miPromedio=0;
        this.calificaciones.forEach((calificacion)=>{
            miPromedio += calificacion
        })
        return miPromedio / this.calificaciones.length
    }
}
console.log(yoMero.promedio())

//Ejercicio 3
//1. Crear un objeto que tenga su información
//2. En el objeto va a tener la propiedad: Año de nacimiento (yearOfBirth)
//3. En el objeto van a tener un método que calcule la edad

let antonio={
    primerNombre: "Antonio",
    apellido: "Enriquez",
    birthYear: 1987,
    calcularEdad: function(birthYear){
        let hoy = new Date();
        let anio = hoy.getFullYear();
        return anio-birthYear;

    }
}

console.log(antonio.calcularEdad(1987));
