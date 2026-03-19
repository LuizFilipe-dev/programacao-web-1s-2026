function desenharTriangulo() {
  var campo = document.getElementById("campo");
  var linhas = Number(campo.value);
  var resultado = document.getElementById("resultado");

  if (campo.value === "" || isNaN(linhas) || linhas < 1) {
    resultado.innerHTML = '<div class="erro">Por favor, digite um número maior que zero!</div>';
    return;
  }

  var triangulo = "";
  for (var i = 1; i <= linhas; i++) {

    var linha = "";
    for (var j = 1; j <= i; j++) {
      linha = linha + "*";
    }
    console.log(linha);
    triangulo = triangulo + linha + "\n";
  }
  resultado.innerHTML =
    '<div class="console">' +
    '<span class="titulo-console">// console.log() — triângulo com ' + linhas + ' linhas</span>' +
    triangulo +
    '</div>';
}

document.getElementById("campo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") desenharTriangulo();
});