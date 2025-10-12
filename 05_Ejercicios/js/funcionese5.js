function calcular(){
    var total = parseFloat(document.getElementById("cantidadi").value);
    var vatos = parseFloat(document.getElementById("hombresi").value);
    var vatas = parseFloat(document.getElementById("mujeresi").value);

    var pHombres = (vatos * 100) / total;
    var pMujeres = (vatas * 100) / total;

    document.getElementById("porcHombresi").value = pHombres.toFixed(2) + "%";
    document.getElementById("porcMujeresi").value = pMujeres.toFixed(2) + "%";
}

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function borrarf(){
    document.getElementById("porcHombresi").value = "";
    document.getElementById("porcMujeresi").value = "";
    document.getElementById("cantidadi").value = "";
    document.getElementById("hombresi").value = "";
    document.getElementById("mujeresi").value = "";
}

function validarYCalcular() {
    var total = parseFloat(document.getElementById("cantidadi").value);
    var vatos = parseFloat(document.getElementById("hombresi").value);
    var vatas = parseFloat(document.getElementById("mujeresi").value);

    if (isNaN(total) || isNaN(vatos) || isNaN(vatas)) {
        alert("Por favor, ingrese valores numéricos válidos en todos los campos.");
        return; 
    }

    var suma = vatos + vatas;


    if (Math.round(suma * 100) / 100 !== Math.round(total * 100) / 100) {
        alert("La suma de hombres y mujeres no es igual a la cantidad de estudiantes");
        return; 
    }
    
    calcular();
}