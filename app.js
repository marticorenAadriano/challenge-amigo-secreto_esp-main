// Intento numero 1
let amigos = ["Lautaro" , "Margarita" , "Rubi" , "Karina" , "Nicolas"];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre ==="") { 
        alert("Por Favor, inserte un nombre");
        return;
    }
amigos.push(nombre);
input.value = "";
mostrarLista();
}
// Funcion para mostrar la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
// Mostrar la lista inicial al cargar la pagina 
document.addEventListener("DOMContentLoaded", mostrarLista);
// Funcion para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos [indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;

}
// Prueba numero 1
// Prueba exitosa 
