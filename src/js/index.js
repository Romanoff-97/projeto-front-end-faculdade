import * as funcoes from "./funcoes.js";

funcoes.carregarConteudo("home.html");
window.funcoes = funcoes;

/**
 * Adicionando evento de clique aos links da navegação
 * ao carregar o conteúdo da página
 */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      funcoes.carregarConteudo(link.getAttribute("href"));
    });
  });
});
