function calcularArea() {
    const B = parseFloat(document.getElementById("base").value);
    const A = parseFloat(document.getElementById("alturaA").value);
    const C = parseFloat(document.getElementById("alturaC").value);

    if (isNaN(B) || isNaN(A) || isNaN(C) || A < C) {
        document.getElementById("resultado").innerText = "Datos inválidos. A debe ser mayor que C.";
        return;
    }

    const areaTriangulo = (B * (A - C)) / 2;
    const areaRectangulo = B * C;
    const areaTotal = areaTriangulo + areaRectangulo;

    document.getElementById("resultado").innerText = `Área total del terreno: ${areaTotal.toFixed(2)} m²`;
}