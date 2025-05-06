/**
 * Carrega o conteúdo da página especificada na div com o id "conteudo"
 * @param {string} pagina - URL da página a ser carregada
 */
export function carregarConteudo(pagina) {
  fetch(pagina)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("conteudo").innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar conteúdo:", error));
}

export function enviarMensagem(){
  
}
