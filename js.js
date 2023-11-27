console.log("Esse arquivo está ok");


let altura = document.getElementById("altura");
let largura = document.getElementById("largura");
let btn1 = document.getElementById("btn1");
let result = document.getElementById("result");

btn1.addEventListener("click", calcular);

function calcular() {
   
    let area = altura.value * largura.value;

    console.log(area)
    result.value = area;
    
}