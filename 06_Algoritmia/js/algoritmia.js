function problema1(){
    const input = document.getElementById("p1-input").value.trim();
    if (input === "") {
        document.getElementById("p1-output").textContent = "Por favor, ingresa texto.";
        return;
    }
    const palabras = input.split(" ");
    const invertidas = palabras.reverse().join(" ");
    document.getElementById("p1-output").textContent = invertidas;
}

function problema2(){

}

function problema3(){
    const input = document.getElementById("p3-input").value.trim();
    if (input === "") {
        document.getElementById("p3-output").textContent = "Por favor, ingresa palabras.";
        return;
    }
    const palabras = input.split(",");
    let maxPalabra = "";
    let maxUnicos = 0;

    for (let palabra of palabras) {
        palabra = palabra.toUpperCase().replace(/[^A-Z]/g, "");
        const unicos = new Set(palabra).size;
        if (unicos > maxUnicos) {
            maxUnicos = unicos;
            maxPalabra = palabra;
        }
    }

    document.getElementById("p3-output").textContent = 
        `La palabra con más caracteres únicos es "${maxPalabra}" (${maxUnicos} únicos).`;
}