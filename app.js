// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombreAmigo = inputNombre.value;

    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return false;
    }

    if (!validarNombreletras(nombreAmigo)) {
        inputNombre.value = "";
        return;
    }
    
    if (!validacionNoduplicados(nombreAmigo)) {
        inputNombre.value = "";
        return;
    }

    nombresAmigos.push(nombreAmigo);
    inputNombre.value = "";
    inputNombre.focus();
    //console.log(nombresAmigos);
    mostrarLista();
}

function validarNombreletras(nombre) {
    let letras = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+$/;
    if (nombre.match(letras)) {
        return true;
    } else {
        alert('Ingresa solo letras');
        return false;
    }
}

function validacionNoduplicados(nombreAmigo) {
    if (nombresAmigos.includes(nombreAmigo)) {
        alert('El nombre del amigo ya está en la lista');
        return false;
    }
    return true;
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < nombresAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombresAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    let amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
    if (nombresAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return false;
    }
    let mostrarResultado = document.getElementById('resultado');
    mostrarResultado.innerHTML =`El amigo secreto es: ${amigoSorteado}`;
    console.log(amigoSorteado);

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}

function restablecer() {
    nombresAmigos = [];
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    let mostrarResultado = document.getElementById('resultado');
    mostrarResultado.innerHTML = '';
}
