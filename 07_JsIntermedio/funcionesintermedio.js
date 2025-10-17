/*
JS maneja variables del siguiente modo:

var -> una variable de acceso local y global dependiendo de donde se declare
let -> es una variable "protegida", solo se puede hacer uso dentro de la función o bloque donde se declara
const -> es una variable que no puede cambiar su valor, es una constante


var x = "hola";

if(true){
    let x = "había una vez";    
}

console.log(x);



//como usamos las funciones

function suma(n1, n2){
    return n1 + n2;   
}

console.log(`Esta suma es de: ${suma(5, 3)}`); 




//la funcion flecha nos ayuda a poder realizar operaciones de una forma mucho mas sencilla, de acuerdo a la siguiente estructura
// "cadena" -> id, clase, metodo, nombre, atributo

const suma = (n1, n2) => n1 + n2;
console.log(`Esta suma es de: ${suma(5, 3)}`); 



const razasDePerros = ["Pastor Aleman",
    "Labrador Retriever",
    "Bulldog Frances",
    "Beagle",
    "Dalmata",
    "Salchicha",
    "Pug"];

    //formas de recorrer e imprimir los elementos de un arreglo

    //for
    for(let i = 0; i < razasDePerros.length; i++){
        console.log(razasDePerros[i]);
    }

    //for of
    for(const raza of razasDePerros){
        console.log(raza);
    }

    //for in
    for(const indice in razasDePerros){
        console.log(razasDePerros[indice]);
    }   

    

    //forEach itera sobre los elementos de un arreglo y no devuelve nada
    //todos los foreach son funciones flecha por defecto

    razasDePerros.forEach(raza => console.log(raza));

    //la estuctura general de un foreach es la siguiente:
    // argumento.forEach((raza, indice, arreglo) => {codigo a ejecutar});

    
    //funcion MAP -> itera sobre los elementos de un arreglo y devuelve un nuevo arreglo con el cual podemos jugar

    const razasDePerrosMayusculas = razasDePerros.map(raza => raza.toUpperCase());
    console.log(razasDePerrosMayusculas);

    

    //FIND -> nos permite realizar una busqueda dentro de un arreglo y devuelve el primer elemento que cumpla con la condicio, sino devuelve undefined

    if(razasDePerros.find(raza => raza === "Dalmata")){
        console.log("La raza si se encuentra en el arreglo");
        console.log(razasDePerros);
    }else{
        razasDePerros.push("Dalmata");
        console.log("La raza no se encuentra en el arreglo, se agregó");
        console.log(razasDePerros);
    }

    

    //FINDINDEX -> nos permite realizar una busqueda dentro de un arreglo y devuelve el indice del primer elemento que cumpla con la condicio, sino devuelve -1, esta funcion es muy util para eliminar elementos o modificar un arreglo, dentro de la copia del mismo

    const indiceChihuahua = razasDePerros.findIndex(raza => raza === "Chihuahua");

    if(indiceChihuahua > -1){
        //console.log("La raza si se encuentra en el arreglo");
        console.log(razasDePerros[indiceChihuahua]);
        //aparte le voy a decir que agregue texto al resultado
        razasDePerros[indiceChihuahua] += " (El perro más pequeño del mundo)";
        console.log(razasDePerros[indiceChihuahua]);
        console.log(razasDePerros);
        */