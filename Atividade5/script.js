function calcularSoma() {
  var campo = document.getElementById("campo");
  var termos = Number(campo.value);
  var resultado = document.getElementById("resultado");
  
  if (campo.value === "" || isNaN(termos) || termos < 1) {
    resultado.innerHTML = '<div class="erro">Por favor, digite um número maior que zero!</div>';
    return;
  }

  var soma = 0;
  var termo = 0;
  var partesSerie = []; 
  var linhasConsole = []; 

  for (var i = 1; i <= termos; i++) {

    var termoTexto = "";
    for (var j = 1; j <= i; j++) {
      termoTexto = termoTexto + "1";
    }

    termo = Number(termoTexto); 
    soma = soma + termo;
    partesSerie.push(termo);
    console.log("Termo " + i + ": " + termo + " | Soma acumulada: " + soma);
    linhasConsole.push(
      '<span class="c-azul">Termo ' + i + ':</span> ' +
      '<span class="c-verde">' + termo.toLocaleString("pt-BR") + '</span>' +
      '  →  soma acumulada: ' + soma.toLocaleString("pt-BR")
    );
  }

  var expressao = partesSerie.join(" + ");

  console.log(expressao);
  console.log("A soma é: " + soma.toLocaleString("pt-BR"));

  resultado.innerHTML =
    '<div class="caixa-resultado">' +
      '<div class="serie-texto">' + expressao + '</div>' +
      '<hr class="divisor" />' +
      '<div class="soma-label">A soma é:</div>' +
      '<div class="soma-valor">' + soma.toLocaleString("pt-BR") + '</div>' +
    '</div>' +
    '<div class="console">' +
      '<span class="titulo-console">// console.log() — passo a passo</span>' +
      linhasConsole.join("\n") +
    '</div>';
}

document.getElementById("campo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") calcularSoma();
});