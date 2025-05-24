function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  if (peso > 0 && altura > 0) {
    let imc = peso / (altura * altura);
    alert("Tu IMC es: " + imc.toFixed(2));
  } else {
    alert("Ingrese valores válidos.");
  }
}