function calcularDescuento(){

    var prc = parseFloat(document.getElementById("productoi").value);


    var descuento = prc * .15;

    var total = prc - descuento;

    document.getElementById("prcProductoi").value = prc;
    document.getElementById("descuentoi").value = descuento.toFixed(2);
    document.getElementById("totali").value = total.toFixed(2);
}

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function borrarf(){
    document.getElementById("totali").value = "";
    document.getElementById("prcProductoi").value = "";
    document.getElementById("descuentoi").value = "";
    document.getElementById("productoi").value = "";
}   