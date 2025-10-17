var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezas, ",
    "Para ordenar las piezas guíate por la imagen objetivo"
];

var movimientos = [

];

var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var rompreCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]       
];

var filaVacia = 2;
var columnaVacia = 2;

function mostrarInstrucciones(instrucciones) {
    for (var i = 0; i < instrucciones.length; i++) {
        mostrarInstruccionesLista(instrucciones[i] , "lista-instrucciones");
    }
}

function mostrarInstruccionesLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

function iniciar() {
    
}

mostrarInstrucciones(instrucciones);

function checarSiGano() {
    for (var i = 0; i < rompe.length; i++) {
        for (var j = 0; j < rompe[fila].length; j++) {
            var RompeActual = rompe[i][j];
            if(RompeActual != rompreCorrecta[i][j]) {
                return false;   
            }
        }
}
    return true;
}

function mostrarCartelGanador() {
    if(checarSiGano()) {
        alert("¡Felicidades, ganaste el juego!");
    }
    return false;
}

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1, columnaPos1];
    var pos2 = rompe[filaPos2, columnaPos2];

    rompe[filaPos1, columnaPos1] = pos2;
    rompe[filaPos2, columnaPos2] = pos1;

    
}