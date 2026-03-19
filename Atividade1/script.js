// Gera numero aleatorio de 1 a 20
var numeroSecreto = Math.floor(Math.random() * 20) + 1;
var tentativas = 0;
var palpites = [];
var jogoAtivo = true;

function verificar() {
  if (!jogoAtivo) return;

  var campo = document.getElementById("campo");
  var palpite = Number(campo.value);

  if (!palpite || palpite < 1 || palpite > 20) {
    mostrarMensagem("Por favor, digite um número de 1 a 20!", "");
    return;
  }

  tentativas++;
  palpites.push(palpite);
  document.getElementById("tentativas").textContent = "Tentativas: " + tentativas;
  document.getElementById("historico").textContent = "Seus palpites: " + palpites.join(", ");

  if (palpite < numeroSecreto) {
    mostrarMensagem("Muito baixo! Tente um número maior.", "menor");
  } else if (palpite > numeroSecreto) {
    mostrarMensagem("Muito alto! Tente um número menor.", "maior");
  } else {
    mostrarMensagem("Parabéns! Você acertou o número " + numeroSecreto + " em " + tentativas + " tentativa(s)!", "acertou");
    jogoAtivo = false;
    document.getElementById("campo").disabled = true;
    document.getElementById("btn-novo").style.display = "block";
  }

  campo.value = "";
  campo.focus();
}

function mostrarMensagem(texto, tipo) {
  var el = document.getElementById("mensagem");
  el.textContent = texto;
  el.className = "mensagem " + tipo;
}

function novoJogo() {
  numeroSecreto = Math.floor(Math.random() * 20) + 1;
  tentativas = 0;
  palpites = [];
  jogoAtivo = true;

  document.getElementById("tentativas").textContent = "Tentativas: 0";
  document.getElementById("historico").textContent = "";
  document.getElementById("campo").disabled = false;
  document.getElementById("campo").value = "";
  document.getElementById("btn-novo").style.display = "none";
  mostrarMensagem("Novo jogo! Diga um número para começar.", "");
  document.getElementById("campo").focus();
}

document.getElementById("campo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") verificar();
});
