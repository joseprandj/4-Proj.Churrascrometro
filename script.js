// Calcular qual a quantidade de comida e bebida necessarias para fazer um churrasco, dependendo do numero de pessoas, se são adultos ou criançar e o tempo de duração do churrasco.

// Carne - 400g p/Pessoa/ >6h - 650g
// Cerveja - 1200ml / >6h - 2000ml
// Refrigerante/água - 1000ml / >6h - 1500ml
// Crianças - 0.5, meia pessoa


let inputAdulto = document.getElementById("adult");
let inputCriancas = document.getElementById("child");
let inputTime = document.getElementById("time");
let resultado = document.getElementById("result");


function calc(){

    let adult = inputAdulto.value;
    let child = inputCriancas.value;
    let time = inputTime.value;

    let totalCarne = carnePP(time) * adult + (carnePP(time) /2 * child);
    let totalCerveja = cervejaPP(time) * adult;
    let totalRefri = refriPP(time) * adult + (refriPP(time) /2 * child);

    resultado.innerHTML = `<p id="resultP">Compre:</p>`

    resultado.innerHTML += `
    <img src="./icon/bife.png" alt="bife">
    <li>${totalCarne / 1000} Kg de Carne</li> <br>`
   
    resultado.innerHTML += `
    <img src="./icon/cerveja.png" alt="cerveja">
    <li>${Math.ceil(totalCerveja / 350)} Latas de Cerveja</li> <br>`

    resultado.innerHTML += `
    <img src="./icon/refri.png" alt="refri">
    <li>${Math.ceil(totalRefri / 1000)} Litros de Refrigerante</li> <br>`

}

function carnePP(timeEvent){
    if(timeEvent >= 6){
        return 650;
    }

    else{
        return 400;
    }
}

function cervejaPP(timeEvent){
    if(timeEvent >= 6){
        return 2000;
    }

    else{
        return 1200;
    }
}

function refriPP(timeEvent){
    if(timeEvent >= 6){
        return 1500;
    }

    else{
        return 1000;
    }
}