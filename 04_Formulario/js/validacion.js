/*
Javascript es un lenguaje multiparadigma
Acepta la programación funcional, estructurada, orientada a objetos y orientada a eventos
Dentro de javascript no existe el typado de variables (int, string, float, etc)

Solo existen tres tipos de variable de acuerdo al estandar ES6:
-VAR
-LET
-CONST

*/

function validar (formulario) {
//Validar que el campo no acepte menos de 3 caracteres
if (formulario.nombre.value.length < 3 ) {
    alert("Por favor escribe más de 3 caracteres en el campo nombre");
    formulario.nombre.focus();
    return false;
}
// Validación letras
var checkStr = formulario.nombre.value;
var abcOK = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "abcdefghijklmnñopqrstuvwxyz";
var allvalido = true;

// Comparar cadena de nombre con el resultado de abc
for (var i = 0; i < checkStr.length; i++) {
    var caracteres = checkStr.charAt(i);
    var letraValida = false;
    for (var j = 0; j < abcOK.length; j++) {
        if (caracteres == abcOK.charAt(j)) {
            letraValida = true;
            break;
        }
    }
    if (!letraValida) {
        allvalido = false;
        break;
    }
}
if (allvalido == false) {
    alert("Ingresar un nombre válido");
    formulario.nombre.focus();
    return false;
}

// Validación solo números
var checkStr = formulario.edad.value;
var numOK = "1234567890";
var allvalido = true;

// Comparar cadena de número con el numOK
for (var i = 0; i < checkStr.length; i++) {
    var caracteres = checkStr.charAt(i);
    var numeroValido = false;
    for (var j = 0; j < numOK.length; j++) {
        if (caracteres == numOK.charAt(j)) {
            numeroValido = true;
            break;
        }
    }
    if (!numeroValido) {
        allvalido = false;
        break;
    }
}
if (!allvalido) {
    alert("Ingrese únicamente números");
    formulario.edad.focus();
    return false;
}
//Validación correo electrónico
var correo = formulario.correo.value;
var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regexCorreo.test(correo)) {
   alert("Ingrese un correo electrónico válido");
   formulario.correo.focus();
   return false;
//}

} 


//Validar correo electrónico que acepte formato texto@texto.texto
//texto.texto@texto.texto 
//texto.texto@texto.texto 

}