function validarTexto(e){
    var tecla = (document.all)? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[A-Za-zÀ-ÿ\s]/;
    var codigo = String.fromCharCode(tecla);
    return patron.test(codigo);
}

function validarTextoNumeros(e){
    var tecla = (document.all)? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[A-Za-zÀ-ÿ0-9\s\.,;:\-]/;
    var codigo = String.fromCharCode(tecla);
    return patron.test(codigo);
}

function validarAlfanumerico(e){
    var tecla = (document.all)? e.keyCode : e.which;
    if (tecla == 8) return true;
    var patron = /[A-Za-z0-9\-]/;
    var codigo = String.fromCharCode(tecla);
    return patron.test(codigo);
}