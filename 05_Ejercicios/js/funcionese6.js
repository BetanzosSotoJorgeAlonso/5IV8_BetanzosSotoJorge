function validarm(e){
    var tecladom = (document.all)? e.keyCode : e.which;
    if (tecladom == 8) return true;
    var patronm = /[0-9\d]/;

    var codigom = String.fromCharCode(tecladom);
    return patronm.test(codigom);
}

// ===========================================
// FUNCIÓN DE VALIDACIÓN DE ENTRADA (SOLO DÍGITOS)
// ===========================================
function validarn(e) {
    // Permite solo la entrada de dígitos (0-9) y Backspace.
    var teclado = (document.all) ? e.keyCode : e.which;
    
    // Permitir tecla de retroceso (Backspace)
    if (teclado == 8) return true; 

    // Patrón para permitir solo números
    var patron = /[0-9]/; 
    var codigo = String.fromCharCode(teclado);
    
    return patron.test(codigo);
}

function calcularEdad() {

    const añoNacimiento = parseInt(document.getElementById("añoi").value);
    const mesNacimiento = parseInt(document.getElementById("mesi").value);
    const diaNacimiento = parseInt(document.getElementById("diai").value);

    if (isNaN(añoNacimiento) || isNaN(mesNacimiento) || isNaN(diaNacimiento)) {
        alert("Por favor, ingresa el año, mes y día de nacimiento.");
        return;
    }
    
    if (mesNacimiento < 1 || mesNacimiento > 12) {
        alert("El mes debe ser un número entre 1 y 12.");
        return;
    }
    if (diaNacimiento < 1 || diaNacimiento > 31) {
        alert("El día debe ser un número entre 1 y 31.");
        return;
    }
    

    const fechaNacimiento = new Date(añoNacimiento, mesNacimiento - 1, diaNacimiento);
    const fechaActual = new Date();

    if (fechaNacimiento.getFullYear() !== añoNacimiento || fechaNacimiento > fechaActual) {
         alert("La fecha de nacimiento no es válida o es posterior a la fecha actual.");
         return;
    }

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    
    if (mesActual < (mesNacimiento - 1) || 
        (mesActual === (mesNacimiento - 1) && diaActual < diaNacimiento)) {
        
        edad--; 
    }

    document.getElementById("edadi").value = edad + " años";
}

function borrarf() {
    document.getElementById("añoi").value = "";
    document.getElementById("mesi").value = "";
    document.getElementById("diai").value = "";
    document.getElementById("edadi").value = "";
}