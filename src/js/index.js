import * as funcoes from "./funcoes.js";

funcoes.carregarConteudo("home.html");
window.funcoes = funcoes;

function carregarConteudo(pagina) {
  fetch(pagina)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("conteudo").innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar conteúdo:", error));
}
