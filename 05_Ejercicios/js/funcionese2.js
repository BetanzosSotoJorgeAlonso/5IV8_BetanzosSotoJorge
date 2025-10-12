function validar(){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularTotal(){
    var sueldo = parseFloat(document.getElementById("sueldoi").value);
    var cantidad1 = parseFloat(document.getElementById("com1i").value);
    var cantidad2 = parseFloat(document.getElementById("com2i").value);
    var cantidad3 = parseFloat(document.getElementById("com3i").value);

    var coms1 = cantidad1 * 0.1;
    var coms2 = cantidad2 * 0.1;
    var coms3 = cantidad3 * 0.1;

    var total = sueldo + coms1 + coms2 + coms3;

    document.getElementById("stotali").value = "$" + total.toFixed(2);
    document.getElementById("venta1i").value = "$" + coms1.toFixed(2);
    document.getElementById("venta2i").value = "$" + coms2.toFixed(2);
    document.getElementById("venta3i").value = "$" + coms3.toFixed(2);

}

function borrarf(){
    document.getElementById("stotali").value = "";
    document.getElementById("venta1i").value = "";
    document.getElementById("venta2i").value = "";
    document.getElementById("venta3i").value = "";
    document.getElementById("com1i").value = "";
    document.getElementById("com2i").value = "";
    document.getElementById("com3i").value = "";
    document.getElementById("sueldoi").value = "";
}

function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}