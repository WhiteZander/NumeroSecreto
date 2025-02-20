let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

nuevoJuego();
console.log(numeroSecreto);

function verificarIntento () {

    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor')
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor')
    }

    limpiarCaja();
    intentos ++;
    }
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';

}

function reiniciarjuego (){
    limpiarCaja();
    nuevoJuego();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numeroMaximo) {

        asignarTextoElemento('p','Ya se sortearon todos los números posibles')

    } else { if (listaNumerosSorteados.includes(numeroGenerado)) {

        return generarNumeroSecreto();  

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }
}

function nuevoJuego(){
    asignarTextoElemento('h1', ' Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
