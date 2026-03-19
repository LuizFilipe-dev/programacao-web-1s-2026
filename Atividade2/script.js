var opcoes = ["pedra", "papel", "tesoura"];
var vitorias = 0;
var empates = 0;
var derrotas = 0;

function jogar() {
  var campo = document.getElementById("campo");
  var escolhaUsuario = campo.value.toLowerCase().trim();

  if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
    mostrarResultado("Digite: pedra, papel ou tesoura!", "");
    return;
  }
  var indice = Math.floor(Math.random() * 3);
  var escolhaComputador = opcoes[indice];
  var resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
  var mensagem = "Você: " + escolhaUsuario + " | Computador: " + escolhaComputador + " → " + resultado.texto;

  mostrarResultado(mensagem, resultado.classe);
  adicionarNoConsole(mensagem, resultado.classe);
  atualizarPlacar(resultado.classe);
  console.log(mensagem);
  campo.value = "";
  campo.focus();
}

function determinarVencedor(usuario, computador) {
  if (usuario === computador) {
    return { texto: "Empate!", classe: "empate" };
  }

  if (
    (usuario === "pedra"   && computador === "tesoura") ||
    (usuario === "papel"   && computador === "pedra")   ||
    (usuario === "tesoura" && computador === "papel")
  ) {
    return { texto: "Você ganhou!", classe: "vitoria" };
  }

  return { texto: "Você perdeu!", classe: "derrota" };
}

function mostrarResultado(texto, classe) {
  var el = document.getElementById("resultado");
  el.textContent = texto;
  el.className = "resultado " + classe;
}

function adicionarNoConsole(mensagem, classe) {
  var console = document.getElementById("console");
  var linha = document.createElement("div");
  linha.textContent = "> " + mensagem;
  linha.className = "log-" + classe;
  console.appendChild(linha);
  console.scrollTop = console.scrollHeight;
}

function atualizarPlacar(classe) {
  if (classe === "vitoria") {
    vitorias++;
    document.getElementById("vitoria").textContent = vitorias;
  } else if (classe === "empate") {
    empates++;
    document.getElementById("empate").textContent = empates;
  } else if (classe === "derrota") {
    derrotas++;
    document.getElementById("derrota").textContent = derrotas;
  }
}

function resetar() {
  vitorias = 0;
  empates = 0;
  derrotas = 0;

  document.getElementById("vitoria").textContent = "0";
  document.getElementById("empate").textContent = "0";
  document.getElementById("derrota").textContent = "0";
  document.getElementById("console").innerHTML = "";
  mostrarResultado("Placar resetado! Faça sua escolha.", "");
}

document.getElementById("campo").addEventListener("keydown", function(e) {
  if (e.key === "Enter") jogar();
});