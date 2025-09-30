/*
Javascript es un lenguaje multiparadigma
Acepta la programación funcional, estructurada, orientada a objetos y orientada a eventos
Dentro de javascript no existe el typado de variables (int, string, float, etc)

Solo existen tres tipos de variable de acuerdo al estandar ES6:
-VAR
-LET
-CONST

*/

function validar(formulario){
    //quiero validar que el campo nombre acepte más de tres caracteres
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe más de tres caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //validacion para letrillas letrullas le
    var checkStr = formulario.nombre.value;
    alert(checkStr); 
    var abcOk ="QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var allValido = true;

    //tenemos que comparar la cadena de nombre vs abc

    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOk.length; j++){
            if(caracteres == abcOk.charAt(j)){
                break;
            }
        }
        if(j == abcOk.length){
        allValido = false;
        break;
        }
    }
    if(!allValido){
        alert("Escribe unicamente letras en el campo nombre")
        formulario.nombre.focus();
        return false;
    }

    var checkStr = formulario.edad.value;
    alert(checkStr); 
    var abcOk = 1234567890;

    var allValido = true;

    //tenemos que comparar la cadena de nombre vs abc

    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOk.length; j++){
            if(caracteres == abcOk.charAt(j)){
                break;
            }
        }
        if(j == abcOk.length){
        allValido = false;
        break;
        }
    }
    if(!allValido){
        alert("Escribe unicamente números en el campo nombre")
        formulario.edad.focus();
        return false;
    }

    var b = /^[^@\s]+[^@\.\s] + (\.[^@\.\s*]+)+$/;

    var txt = formulario.correo.value;

    alert("Email " + (b.test(txt)? " ": " no ") + "valido")

    return b.test;
}