import * as funcoes from "./funcoes";

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

      if (link.textContent === "Contato") {
        setTimeout(() => {
          /**
           * Adicionando evento de envio ao formulário de contato
           */
          const formContatoEl = document.getElementById("form-contato");
          formContatoEl.addEventListener("submit", (event) => {
            event.preventDefault();
            funcoes.enviarMensagem();
          });
        }, 600);
      }
    });
  });
});
