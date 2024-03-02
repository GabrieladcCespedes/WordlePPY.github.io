let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

//EVENTO load - Event Listener: mecanismo que permite detectar cuando ocurre un evento en una página web
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
window.addEventListener('load', init);

//EVENTO click
function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (INTENTO === palabra ) {
        for (let i in palabra){
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
            ROW.appendChild(SPAN)
            GRID.appendChild(ROW)
        }
        terminar("<h1>GANASTE!</h1>")
        
        return
    }
    
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
	intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }
}
const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar);

//Leer intentos 
const input = document.getElementById("guess-input");
const valor = input.value;

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
//Iterar sobre la variable palabra
for (let i in palabra){
	console.log(palabra[i]);
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

//Gilla de letras
