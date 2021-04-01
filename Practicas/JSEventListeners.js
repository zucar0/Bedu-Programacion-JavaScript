const title = document.getElementById("title");
const redButton =  document.getElementById("red");
const greenButton =  document.getElementById("green");
const blueButton =  document.getElementById("blue");

// redButton.addEventListener("click", () => {
//     title.style.color="red";
// });

// blueButton.addEventListener("click", () => {
//     title.style.color="blue";
// });

// greenButton.addEventListener("click", () => {
//     title.style.color="green";
// });

/**
 * Ejercicio 1: Inflar un globo
 * 1.- Copiar el texto
 * 2.- Inflar el globo
 * 3.- Al dar click el globo debe incrementar su tamaño
 * 4.- Al dar doble click debe decrementar su tamaño
 */
const globo = document.getElementById("globo");
let contador = 10;
// globo.addEventListener("click", ()=>{
//     contador +=2;
//     globo.style.fontSize= `${contador}px`;
//     globo.style.cursor="pointer";

// })
// globo.addEventListener("mouseout", ()=>{
//     contador -=2;
//     globo.style.fontSize= `${contador}px`;
//     globo.style.cursor="pointer";
// })

//EVENT OBJECT
// const myInput = document.getElementById("my-input");
// const inputText = document.getElementById("input-text");
// myInput.addEventListener("input", (event)=>{
//     console.log("EVENT ===>", event.target.value);
//     // inputText.textContent = event.target.value;
//     inputText.innerText = event.target.value;
//     // inputText.appendChild = event.target.value;

// })


const myInput1 = document.getElementById("my-input1");
const myInput2 = document.getElementById("my-input2");
let resultadoOk = document.getElementById("resultado");
let numero1 =0;
let numero2 =0;
var result =0;

myInput1.addEventListener("input", (event1) =>{
    numero1 = Number(event1.target.value);
    resultadoOk.textContent=numero1+numero2;
});

myInput2.addEventListener("input", (event2)=>{
    numero2 = Number(event2.target.value);
    resultadoOk.textContent=numero1+numero2;
});

 





