// que elementos participan - DOM
const btn_sumar = document.getElementById('btnSumar');
const btn_restar = document.getElementById('btnRestar');
const btn_multi = document.getElementById('btnMultiplicar');
const btn_dividir = document.getElementById('btnDividir');

// usuario mete datos 
const numberUno = document.getElementById('primerNumero');
const numberDos = document.getElementById('segundoNumero');
const reset = document.getElementById('btnReset');
// ver resultado 

let resultado = document.getElementById('resultado');

function verificacionValores() {
    if (isNaN(numberUno) || isNaN(numberDos) || numberUno === '' || numberDos === ''){
        return true;
    }else{
        return false;
    }
}

// FUNCIONES DE OPERACIONES 

function sumar(){
    // verificar 
    if (verificacionValores()) {
        return Number(numberUno.value) + Number(numberDos.value);
    }else{
        return undefined;
    }
}

function restar(){
    // verificar 
    if (verificacionValores()) {
        return Number(numberUno.value) - Number(numberDos.value);
    }else{
        return undefined;
    }
}

function multiplicar(){
    // verificar 
    if (verificacionValores()) {
        return Number(numberUno.value) * Number(numberDos.value);
    }else{
        return undefined;
    }
}

function dividir(){
    // verificar 
    if (verificacionValores()) {
        return Number(numberUno.value) / Number(numberDos.value);
    }else{
        return undefined;
    }
}

// EVENTOS DE BOTONES 

btn_sumar.addEventListener('click',function(){
    
    if (sumar()){
        resultado.innerHTML = sumar();
    }else {
        resultado.innerHTML = 'ERROR';
    }
})


btn_restar.addEventListener('click',function(){
    
    if (restar()){
        resultado.innerHTML = restar();
    }else {
        resultado.innerHTML = 'ERROR';
    }
})

btn_multi.addEventListener('click',function(){
    
    if (multiplicar()){
        resultado.innerHTML = multiplicar();
    }else {
        resultado.innerHTML = 'ERROR';
    }
})

btn_dividir.addEventListener('click',function(){
    
    if (dividir()){
        resultado.innerHTML = dividir();
    }else {
        resultado.innerHTML = 'ERROR';
    }
})

// Reset 
reset.addEventListener('click', function(){
        numberUno.value = '';
        numberDos.value = '';
        resultado.innerHTML = '';
})

