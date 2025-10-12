

function validarm(e){
    var tecladom = (document.all)? e.keyCode : e.which;
    if (tecladom == 8) return true;
    var patronm = /[0-9\d .]/;

    var codigom = String.fromCharCode(tecladom);
    return patronm.test(codigom);
}

function validarRangoFinal() {
    var inputElemento = document.getElementById("mesesi");
    var meses = parseInt(inputElemento.value);

    if (meses < 1 || meses > 18) {
        alert("Ingresar mínimo un mes y máximo 18 meses");
        return false;
    }
    return true;
}


function interes(){
        var valor = document.getElementById("cantidadi").value;
        var valorm = document.getElementById("mesesi").value;


        var capitalInicial = parseFloat(valor);
        var meses = parseInt(valorm);
        const tasaMensual = 0.00648; 

        var valorFinal = capitalInicial * Math.pow((1 + tasaMensual), meses);

        document.getElementById("saldoi").value = "$" + valorFinal.toFixed(2);
}

function borrarf(){
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";
    document.getElementById("mesesi").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo número de meses y será una inversión de máximo 18 meses

Del ejercicio 2 se deben ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma total

Del ejercicio 3 debe de ingresar un producto, su precio y aplicarle el 15% de descuento y el sistema debe mostrar el producto, precio, descuento y total a pagar

Del ejercicio 4, se debe ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe mostrar el total de calificacion

Del 5, ingresar cantidad de hombres y mujeres y mostrar sus % correspondientes

Del 6, Calcular la edad de una persona
*/