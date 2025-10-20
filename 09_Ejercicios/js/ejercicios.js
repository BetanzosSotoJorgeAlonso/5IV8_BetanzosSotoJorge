function ejercicio1() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    if(num1 === num2){
        document.getElementById("ej1").textContent = "El producto de los números es: " + (num1 * num2);
    }    else{
        if(num1 > num2){
            document.getElementById("ej1").textContent = "La resta de los números es: " + (num1 - num2);
        }else{
            document.getElementById("ej1").textContent = "La suma de los números es: " + (num1 + num2);
        }
    }
return false;
}

function ejercicio2() {
    num1 = parseFloat(document.getElementById("numA").value);
    num2 = parseFloat(document.getElementById("numB").value);
    num3 = parseFloat(document.getElementById("numC").value);

    if(num1 === num2 && num1 === num3){
        document.getElementById("ej2").textContent = "Los tres números son iguales.";
        return false;
    }

    if(num1 >= num2 && num1 >= num3){
        document.getElementById("ej2").textContent = "El número mayor es: " + num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        document.getElementById("ej2").textContent = "El número mayor es: " + num2;
    }
    else if(num3 >= num1 && num3 >= num2){
        document.getElementById("ej2").textContent = "El número mayor es: " + num3;
    } 

    return false;
}

function ejercicio3() {
    horas = Math.trunc(parseFloat(document.getElementById("horas").value));
    paga = Math.trunc(parseFloat(document.getElementById("paga").value));


    if(horas < 0 || paga < 0){
        document.getElementById("ej3").textContent = "Las horas trabajadas y la paga por hora no pueden ser negativas.";
        return false;
    }

    if(horas <= 40){
        total = horas * paga;
        document.getElementById("ej3").textContent = "El pago total es: " + total + "$";
        return false;
    }

    if(horas > 40 && horas <= 48){
        total = (40 * paga) + ((horas - 40) * (paga * 2));
        document.getElementById("ej3").textContent = "El pago total es: " + total + "$";
        return false;
    }

    if(horas > 48){
        total = (40 * paga) + (8 * (paga * 2)) + ((horas - 48) * (paga * 3));
        document.getElementById("ej3").textContent = "El pago total es: " + total + "$";
        return false;
    }

}

function ejercicio4() {
    sueldo = parseFloat(document.getElementById("sueldo").value);
    antiguedad = Math.trunc(parseInt(document.getElementById("antiguedad").value));

    if(antiguedad < 0){
        document.getElementById("ej4").textContent = "La antigüedad no puede ser negativa.";
        return false;
    }

    if(antiguedad < 1){
        utilidad = sueldo * 0.05;
    }

    if(antiguedad >= 1 && antiguedad < 3){
        utilidad = sueldo * 0.07;
    }

    if(antiguedad > 2 && antiguedad < 6){
        utilidad = sueldo * 0.10;
    }

    if(antiguedad > 5 && antiguedad < 11){
        utilidad = sueldo * 0.15;
    }

    if(antiguedad > 10){
        utilidad = sueldo * 0.20;
    }

    document.getElementById("ej4").textContent = "La utilidad que recibe el trabajador es: " + utilidad + "$";
    return false;
}