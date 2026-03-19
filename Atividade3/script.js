function gerarTabuada() {
  var campo = document.getElementById("campo");
  var numero = Number(campo.value);
  var resultado = document.getElementById("resultado");

  if (campo.value === "" || isNaN(numero)) {
    resultado.innerHTML = '<div class="erro">Por favor, digite um número válido!</div>';
    return;
  }
  var tabela = '<p class="titulo-tabuada">Tabuada do ' + numero + '</p>';
  tabela += '<table>';
  tabela += '  <thead><tr><th>Operação</th><th>Resultado</th></tr></thead>';
  tabela += '  <tbody>';

  for (var i = 1; i <= 10; i++) {
    var res = numero * i; 
    console.log(numero + " x " + i + " = " + res);
    tabela += '<tr>';
    tabela += '  <td>' + numero + ' x ' + i + '</td>';
    tabela += '  <td>' + res + '</td>';
    tabela += '</tr>';
  }

  tabela += '  </tbody>';
  tabela += '</table>';
  resultado.innerHTML = tabela;
}

document.getElementById("campo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") gerarTabuada();
});