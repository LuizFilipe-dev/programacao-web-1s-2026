let contador = 0;

const contadorTela = document.getElementById("contador");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

const inputTexto = document.getElementById("inputTexto");
const areaTexto = document.getElementById("areaTexto");
const contadorCaracteres = document.getElementById("contadorCaracteres");

const btnLista = document.getElementById("btnLista");
const tipoLista = document.getElementById("tipoLista");
const areaListas = document.getElementById("areaListas");

const btnReset = document.getElementById("btnReset");

function atualizarTela() {
    contadorTela.innerText = contador;
}

btnMais.addEventListener("click", function () {
    contador++;
    atualizarTela();
});

btnMenos.addEventListener("click", function () {
    if (contador === 0) {
        alert("O contador já está em zero!");
    } else {
        contador--;
        atualizarTela();
    }
});

inputTexto.addEventListener("input", function () {
    let texto = inputTexto.value.replace(/\s/g, "");
    contadorCaracteres.innerText = texto.length;
});

inputTexto.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let texto = inputTexto.value;

        if (texto !== "") {
            let p = document.createElement("p");
            p.innerText = texto;
            areaTexto.appendChild(p);

            inputTexto.value = "";
            contadorCaracteres.innerText = 0;
        }
    }
});

btnLista.addEventListener("click", function () {
    let tipo = tipoLista.value;

    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.innerText = "Item " + i;
        lista.appendChild(item);
    }

    areaListas.appendChild(lista);
});

btnReset.addEventListener("click", function () {
    contador = 0;
    atualizarTela();

    areaTexto.innerHTML = "";
    areaListas.innerHTML = "";

    inputTexto.value = "";
    contadorCaracteres.innerText = 0;
});