const claveNombre = "localstorage_explicacion_nombre";

const nombreGuardar = document.getElementById("nombreGuardar");
const resultadoGuardar = document.getElementById("resultadoGuardar");

function guardarNombre() {
    const nombre = nombreGuardar.value.trim();

    if (nombre === "") {
        alert("Por favor ingrese el nombre");
        return;
    }

    localStorage.setItem(claveNombre, nombre);
    nombreGuardar.value = "";
    resultadoGuardar.textContent = `Nombre guardado: ${nombre}`;
}

const resultadoEliminar = document.getElementById("resultadoEliminar");
const formEliminar = document.getElementById("formEliminar");

if (formEliminar) {
    formEliminar.addEventListener("submit", function (evento) {
        evento.preventDefault();

        localStorage.removeItem(claveNombre);
        localStorage.removeItem("Nombre");
        resultadoEliminar.textContent = "Nombre eliminado.";
    });
}

const formEditar = document.getElementById("formEditar");
const nombreEditar = document.getElementById("nombreEditar");
const resultadoEditar = document.getElementById("resultadoEditar");

if (formEditar) {
    formEditar.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nuevoNombre = nombreEditar.value.trim();
        if (nuevoNombre === "") {
            alert("Por favor ingrese el nuevo nombre");
            return;
        }

        localStorage.setItem(claveNombre, nuevoNombre);
        nombreEditar.value = "";
        resultadoEditar.textContent = `Nombre actualizado: ${nuevoNombre}`;
    });
}

const formMascota = document.getElementById("formMascota");

if (formMascota) {
    formMascota.addEventListener("submit", (event) => {
        event.preventDefault();

        const mascota = {
            nombre: document.getElementById("mascota").value,
            raza: document.getElementById("raza").value,
            edad: Number(document.getElementById("edad").value)
        };
        localStorage.setItem("mascota", JSON.stringify(mascota));
    });
}