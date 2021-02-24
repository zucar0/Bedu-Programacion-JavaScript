function flatten(arreglo) {
    return arreglos.reduce(function(flat, current) {
        return flat.concat(current);
      }, []);
  }

  var arreglos = [[1, 2, 3], [4, 5], [6]];

  var arreglo = flatten(arreglos);
  console.log("Resultado: ", arreglo)
  console.log("Valor original: ", arreglos)


  var arregloRecibido = [0, 1, false, 2, '', 3]
  function compact(arregloRecibido){

  }