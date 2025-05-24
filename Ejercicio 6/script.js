function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let altura = parseInt(document.getElementById("altura").value);
    let correo = document.getElementById("correo").value;

    let mensaje = "";
    let valido = true;

    if (!nombre || nombre.length > 50) {
        mensaje += "Nombre inválido. ";
        valido = false;
    }
    if (!apellido || apellido.length > 50) {
        mensaje += "Apellido inválido. ";
        valido = false;
    }
    if (edad < 0 || edad < 18) {
        mensaje += "Edad inválida o menor de edad. ";
        valido = false;
    }
    if (altura < 0 || altura > 230) {
        mensaje += "Altura inválida. ";
        valido = false;
    }
    if (!correo.includes("@")) {
        mensaje += "Correo inválido. ";
        valido = false;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerText = mensaje || "Todo válido";
    resultado.style.color = valido ? "green" : "red";
}