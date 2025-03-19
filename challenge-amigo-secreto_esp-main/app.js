const listadeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listado = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listadeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listadeAmigos.push(nombre);

    const listItem = document.createElement("lo");
    listItem.textContent = nombre;
    listado.appendChild(listItem);

    input.value = "";
}

function sortearAmigo() {
    if (listadeAmigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listadeAmigos.length);
    const amigoSorteado = listadeAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    if (!resultado) {
        console.error("No se encontró el elemento con id 'resultado'");
        return;
    }

    resultado.innerHTML = `<lo>El amigo secreto es: <strong>${amigoSorteado}</strong></lo>`;
}
