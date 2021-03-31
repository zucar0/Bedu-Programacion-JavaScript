/*  Ejercicio 3: 
    1.- Vamos a utilizar el arreglo de objetos para crear una tabla 
    2.- Crear la tabla utilizando los metodos de "document" 
    3.- Iterar sobre el arreglo para crear headers 
    4.- Iterar sobre el arreglo para crear los table rows 
    // document.createElement("table") 
    // document.appendChild("thead") 
    // Iterar arreglo data: data[] 
    // Object.keys(data[0]) // [ "name", "height", "place" ] 
*/ 
var data = [ 
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"}, 
    {name: "Everest", height: 8848, place: "Nepal"}, 
    {name: "Mount Fuji", height: 3776, place: "Japan"}, 
    {name: "Vaalserberg", height: 323, place: "Netherlands"}, 
    {name: "Denali", height: 6168, place: "United States"}, 
    {name: "Popocatepetl", height: 5465, place: "Mexico"}, 
    {name: "Mont Blanc", height: 4808, place: "Italy/France"} 
  ];
//Se crea la función
const createTable = (inputArray) => {
    const container = document.getElementById("container");
    const table = document.createElement("table"); // Representa <table></table> en el DOM
    const tableHead = document.createElement("thead");
    const fields = Object.keys(inputArray[0]) //Nos trae: [name, height, place]

    fields.forEach((field) =>{
        //La primera vez tiene name, la segunda height, la tercera place
        const headCell = document.createElement("th"); // <th></th>
        headCell.appendChild(document.createTextNode(field));
        tableHead.appendChild(headCell); //<th>name</th> ===> <thead> <th>name</th> </thead>
    });
    table.appendChild(tableHead);
    container.appendChild(table);

    const body = document.createElement("tbody"); //  <tbody></tbody>

    inputArray.forEach((obj) => {
        //1era vez: obj= {name: "Kilimanjaro", height: 5895, place: "Tanzania"}
        const row = document.createElement("tr"); // <tr></tr> 

        fields.forEach((field)=>{
            const cell = document.createElement("td");
            cell.appendChild(document.createTextNode(obj[field])); // <td>Kilimanjaro</td>
            row.appendChild(cell); //<tr> <td>Kilimanjaro</td> </tr>
        })

        body.appendChild(row);
    })

    table.appendChild(body);

    //Estilos
    table.setAttribute("border", "5px");
    table.style.border="1px solid yellow";
    table.style.textTransform="capitalize";
}
//Se manda a llamar la función 
createTable(data);