function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularFinal(){
    var primer = parseFloat(document.getElementById("parcial1i").value);
    var segundo = parseFloat(document.getElementById("parcial2i").value);
    var tercero = parseFloat(document.getElementById("parcial3i").value);
    var exm = parseFloat(document.getElementById("finali").value);
    var trb = parseFloat(document.getElementById("trabajoi").value);

    var prm = (primer + segundo + tercero)/3;

    var promedio = prm * .55;
    var examen = exm * .3;
    var trabajo = trb * .15;

    var total = promedio + examen + trabajo;

    document.getElementById("calFinali").value = total.toFixed(2);
}

function borrarf(){
    document.getElementById("parcial1i").value = "";
    document.getElementById("parcial2i").value = "";
    document.getElementById("parcial3i").value = "";
    document.getElementById("finali").value = "";
    document.getElementById("trabajoi").value = "";
    document.getElementById("calFinali").value = "";
}